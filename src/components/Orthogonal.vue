<template>
    <div>
        <div class="demo-input-size" v-for="(item,index) in tableData">
            <el-input
                    size="large"
                    placeholder="测试因子序号"
                    :value="index+1">
            </el-input>
            <el-input
                    size="large"
                    placeholder="请输入测试因子"
                    v-model="item.key">
            </el-input>
            <el-input
                    size="large"
                    placeholder="请输入因子的水平，中间用'/'分割"
                    v-model="item.value">
            </el-input>
            <el-button type="danger" @click="delRow(index)">删除此行</el-button>
        </div>

        <p></p>
        <el-button type="primary" @click="addRow">点我添加一行</el-button>
        <el-button type="success" @click="runDesign">点我运行程序</el-button>

        <p></p>
        <p></p>
        <p></p>

                        <div>
                                <div class="demo-input-size" v-for="(item2,index2) in resData">
                                    <el-input
                                            size="large"
                                            placeholder="测试因子序号"
                                            :value="index2+1">
                                    </el-input>
                                    <el-input
                                            size="large"
                                            placeholder="测试因子序号"
                                            :value="JSON.stringify(item2).replace(/{|}/g,'')">
                                    </el-input>

                                </div>
                         </div>

    </div>


</template>

<script>
    import {request} from "./network/request";
    export default {
        data() {
            return {
                tableData:[
                    {key:'纸张规格',value:'A1/B1/B2'},
                    {key:'打印时间',value:'上午/中午/下午'},
                    {key:'打印人',value:'小胡/中胡/大胡'},
                ],
                resData:[
                    // {'纸张规格': 'A1', '打印时间': '上午', '打印人': '小胡'},
                    // {'纸张规格': 'B1', '打印时间': '中午', '打印人': '小胡'},
                    // {'纸张规格': 'B2', '打印时间': '下午', '打印人': '小胡'},
                    // {'纸张规格': 'B2', '打印时间': '中午', '打印人': '中胡'},
                    // {'纸张规格': 'B1', '打印时间': '上午', '打印人': '中胡'},
                    // {'纸张规格': 'A1', '打印时间': '下午', '打印人': '中胡'},
                    // {'纸张规格': 'A1', '打印时间': '中午', '打印人': '大胡'},
                    // {'纸张规格': 'B1', '打印时间': '下午', '打印人': '大胡'},
                    // {'纸张规格': 'B2', '打印时间': '上午', '打印人': '大胡'}
                ]
            }
        },
        methods:{
            addRow(){
                console.log('add');
                this.tableData.push({
                    key:'测试因子',
                    value:'因子的水平，中间用\'/\'分割'
                })
            },
            delRow(index){
                console.log('delete');
                this.tableData.pop(index)
            },
            runDesign(){
                // for (let i = 0; i <Object.values(this.tableData).length; i++) {
                //     this.valueList.push(Object.values(this.tableData)[i].value)
                // }
                if(this.tableData.length <=1){
                    alert('因素不能是一个请补充')
                    return
                }
                console.log('exexcute');
                return request({
                    url:'docs/orthogonal/',
                    method:'post',
                    data:this.tableData
                }).then(res=>{
                     this.resData= res.res
                    console.log(this.resData);
                }).catch(error=>{
                    console.log(error);
                })
            }
        }

    }
</script>

<style scoped>
    .demo-input-size {
        display: flex;
    }

</style>