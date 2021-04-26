<template>
  <div ref="Main">

<!--  <div class="demo-input-size " ref="defaultInput">-->

<!--  <el-input-->
<!--    placeholder="因子状态2"-->
<!--    v-model="input1" v-for="item in ObjArray">-->
<!--  </el-input>-->

<!--    <el-button type="primary" >增加状态</el-button>-->
<!--    <el-button type="danger" @click="delRow">删除此行</el-button>-->
<!--  </div>-->
      <div class="demo-input-size">
          <el-input v-for="item in ObjArray">{{item.yinzi}}</el-input>
      </div>
      <p></p>
      <el-button type="primary" @click="addRow">点我添加一行</el-button>
      <el-button type="success">点我构造用例</el-button>
  </div>

</template>

<script>
    export default {
        name: "orthogonal",
         data() {

          return {

                 ObjArray:[
                  {
                  yinzi:'测试因子1',
                  status:['子状态1']
                  },
                  {
                  yinzi:'测试因子2',
                  status:['子状态1','子状态2']
                  },
                  {
                  yinzi:'测试因子3',
                  status:['子状态1','子状态2','子状态3']
                  }
              ]
          }
    },
        mounted() {
            console.log(this.$refs.defaultInput);
        },
        methods:{
            delRow(){
                this.$refs.defaultInput.remove()
            },
            addRow(){
                console.log('test');
                let tempNode = this.$refs.defaultInput.cloneNode()
                this.$refs.Main.appendChild(tempNode)
            }
        }
    }
</script>

<style scoped>
.demo-input-size{
    display: flex;
}

</style>