<template>
    <div>
        <div class="demo-input-size" v-for="(item,index) in tableData">

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
        <el-button type="success" >点我运行程序</el-button>


    </div>


</template>

<script>
    export default {
        data() {
            return {
                tableData:[
                    {key:'纸张规格',value:'A0/A1/B1/B2'},
                    {key:'打印时间',value:'上午/中午/下午'},
                    {key:'打印人',value:'小胡/中胡/大胡/'},
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
            }
        }

    }
</script>

<style scoped>
    .demo-input-size {
        display: flex;
    }

</style>