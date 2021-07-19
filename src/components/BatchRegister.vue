<template>
    <div>
        <h1>这是批量注册页面</h1>
        <div class="all_input">
            <el-select v-model="value" placeholder="请选择" class="sub">
                <el-option
                        v-for="item in options"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-input v-model="input1" placeholder="请输入老师的手机号" class="sub" maxlength="11"></el-input>
            <el-input v-model="input2" placeholder="请输入家长的手机号开始区间" class="sub" maxlength="11"></el-input>
            <el-input v-model="input3" placeholder="请输入家长的手机号结束区间" class="sub" maxlength="11"></el-input>
            <el-button type="primary" @click="batchRegister">点我进行批量注册</el-button>
        </div>
    </div>
</template>

<script>
    import {request} from "./network/request";
    export default {
        name: "BatchRegister",
        data() {
            return {
                options: [{
                    value: '小学学生',
                }, {
                    value: '中学学生',
                }],
                value:'',
                input1: '',
                input2: '',
                input3: ''
            }
        },
        methods:{
            batchRegister(){
                if(this.value=='' || this.input1=='' || this.input2=='' ||this.input3 ==''){
                    alert('输入框不许为空，请检查')
                    return
                }else if (this.input1.length !== 11 ||  this.input2.length !== 11 ||this.input3.length !== 11 ){
                    alert('手机号格式或者长度不正确，请检查')
                    return
                } else {
                    var data = []
                    data.push(this.value,this.input1,this.input2,this.input3)
                    let timeout = 1000*(this.input3-this.input2+1)
                    return request({
                        url:'api/batchRegister/',
                        method:'post',
                        data:data,
                        timeout:timeout
                    }).then(res=>{
                        alert(res)
                    }).catch(error =>{
                        alert(error)
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .all_input {
        display: flex;
    }

    .sub {
        flex: 1;
    }
</style>