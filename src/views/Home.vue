<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['1', '3','4']" background-color="#FFDEAD">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>通用测试技术</template>
                    <el-menu-item-group>
                        <el-menu-item index="/orthogonal">正交用例设计</el-menu-item>
                        <el-menu-item index="/transform">Xmind2Excel</el-menu-item>
                        <el-menu-item index="/redisOption">Redis连通性 </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>公立校业务</span>
                    </template>

                    <el-menu-item index="/batchRegister">批量注册学生</el-menu-item>
                    <el-menu-item index="3-2">线上OMO学生</el-menu-item>
                    <el-menu-item index="3-3">线上OMO学生</el-menu-item>
                </el-submenu>


                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>OMO模拟器</span>
                    </template>
                    <el-menu-item index="4-1">线下OMO学生</el-menu-item>
                    <el-menu-item index="4-2">线上OMO学生</el-menu-item>
                    <el-menu-item index="4-3">线上OMO学生</el-menu-item>
                </el-submenu>
            </el-menu>


        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 16px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>xiaodonghu</span>
            </el-header>

            <el-main style="background-color: #F0FFFF">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>

<style src="./css/home.css">

</style>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        methods: {},
        data() {
            const item = {};
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>
