<template>
    <div>
           <div class="connect-info">
            <el-input
              placeholder="请输入Ip"
              v-model="this.defaultIp"
              @input="changeIp($event)"
              clearable
            >
            </el-input>

            <el-input
              placeholder="请输入端口"
              v-model="this.defaultPort"
               @input="changePort($event)"
              clearable>
            </el-input>


             <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
            </el-select>
           </div>

    </div>
</template>

<script>
    export default {
        name: "RedisOption",
        data(){
            return{
                defaultIp:'127.0.0.1',
                defaultPort:'6379',
                 options: [{
                  value: '选项1',
                  label: 'db0'
                }, {
                  value: '选项2',
                  label: 'db1'
                }, {
                  value: '选项3',
                  label: 'db2'
                }, {
                  value: '选项4',
                  label: 'db3'
                }, {
                  value: '选项5',
                  label: 'db4'
                },
                {
                  value: '选项6',
                  label: 'db5'
                },{
                  value: '选项7',
                  label: 'db6'
                },{
                  value: '选项8',
                  label: 'db7'
                },{
                  value: '选项9',
                  label: 'db8'
                },{
                  value: '选项10',
                  label: 'db9'
                },{
                  value: '选项11',
                  label: 'db10'
                },{
                  value: '选项12',
                  label: 'db11'
                },{
                  value: '选项13',
                  label: 'db12'
                },{
                  value: '选项14',
                  label: 'db13'
                },{
                  value: '选项15',
                  label: 'db14'
                },{
                  value: '选项16',
                  label: 'db15'
                },
                ],
             value: '选项1'
      }
            },
        methods:{
            changeIp(e){
                this.defaultIp = e
            },
            changePort(e){
                this.defaultPort = e
            }
        }
    }
</script>

<style scoped>
.connect-info{
    display: flex;
}
</style>