<template>
    <div>
        <div class="connect-info">
            <el-input class="inputItem"
                      placeholder="请输入Ip"
                      v-model="inputIp"
                      clearable
            >
            </el-input>
            <el-input class="inputItem"
                      placeholder="请输入端口"
                      v-model="inputPort"
                      clearable>
            </el-input>
            <el-select v-model="value" placeholder="请选择" class="inputItem">
                <el-option
                        v-for="item in dbs"
                        :key="item.value"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-input class="inputItem"
                      placeholder="请输入密码，默认为空"
                      v-model="inputPssword"
                      clearable>
            </el-input>

            <el-button
                    plain
                    @click="testConnect">
                点我测试连通性
            </el-button>

        </div>


        <div class="redis-option">
         <el-select v-model="rvalue" placeholder="请选择" class="redisOption">
                <el-option
                        v-for="item in Redisoptions"
                        :value="item.rvalue">
                </el-option>
        </el-select>


        <el-input class="redisOption"
                      placeholder="key，默认为空"
                      v-model="inputkey"
                      clearable>
        </el-input>


        <el-input class="redisOption"
                      placeholder="value，默认为空"
                      v-model="inputvalue"
                      clearable>
        </el-input>

        <el-input class="redisOption"
                      placeholder="请输入其他参数，默认为空"
                      v-model="othervalue"
                      clearable>
        </el-input>


        <el-button
                    plain
                    @click="execOpt">
                请点我执行指令
            </el-button>
        </div>



    </div>
</template>

<script>
    import {request} from "network/request";

    export default {
        name: "RedisOption",
        data() {
            return {
                isConnect: false,
                inputIp: '127.0.0.1',
                inputPort: '6379',
                inputPssword: '',
                inputkey:'',
                inputvalue:'',
                othervalue:'',
                dbs: [{
                    value: 'db0',
                }, {
                    value: 'db1',
                }, {
                    value: 'db2',
                }, {
                    value: 'db3',
                }, {
                    value: 'db4',
                },
                    {
                        value: 'db5',
                    }, {
                        value: 'db6',
                    }, {
                        value: 'db7',
                    }, {
                        value: 'db8',
                    }, {
                        value: 'db9',

                    }, {
                        value: 'db10',
                    }, {
                        value: 'db11',
                    }, {
                        value: 'db12',

                    }, {
                        value: 'db13'
                    }, {
                        value: 'db14',
                    }, {
                        value: 'db15',
                    },
                ],
                value: 'db0',
                rvalue:'',
                    Redisoptions: [{
                        rvalue: 'set',
                    }, {
                        rvalue: 'get',
                    },
                    {
                        rvalue: 'del',
                    }
                    ],
            }
        },
        methods: {
            open1() {
                if (this.isConnect === true) {
                    this.$notify({
                        title: '成功',
                        message: '这是一条成功的提示消息',
                        type: 'success'
                    });
                } else {
                    this.$notify({
                        title: '警告',
                        message: '这是一条警告的提示消息',
                        type: 'warning'
                    });
                }
            },
            execOpt(){
                var data = []
                data.push(this.rvalue,this.inputkey,this.inputvalue,this.othervalue)
                return request({
                  url:'api/redisExecute/',
                  method:'post',
                  data:{
                       Ip: this.inputIp,
                        Port: this.inputPort,
                        password: this.inputPssword,
                        db: this.value.replace(/[^0-9]/ig, ""),
                        rvalue:this.rvalue,
                        inputkey:this.inputkey,
                        inputvalue:this.inputvalue,
                        othervalue:this.othervalue,
                  }
              }).then(res=>{
                    console.log(res);
                    alert(JSON.stringify(res))
                }).catch(error=>{
                    alert(JSON.stringify(error))
                })
            },
            testConnect() {
                return request({
                    url: 'api/redisOption/',
                    method: 'post',
                    data: {
                        Ip: this.inputIp,
                        Port: this.inputPort,
                        password: this.inputPssword,
                        db: this.value.replace(/[^0-9]/ig, "")
                    }
                }).then(res => {
                    this.isConnect = res['signal']
                    if (this.isConnect === true) {
                        this.$notify({
                            title: '成功',
                            message: '连接成功',
                            type: 'success',
                            duration: 2000
                        });
                    } else {
                        this.$notify({
                            title: '错误',
                            message: '连接超时，检查连接信息或者redis配置',
                            type: 'warning',
                            duration: 2000
                        });
                    }
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>
<style scoped>
    .connect-info {
        display: flex;
    }
    .redis-option{
         display: flex;
    }
    .inputItem {
        flex: 1;
    }
     .redisOption {
        flex: 1;
    }
</style>