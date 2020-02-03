<template>
    <div>
        <div class="services">
             <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="User" name="first">User</el-tab-pane>
                <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                <el-tab-pane label="bladinmir" name="third">Tu eres loco?</el-tab-pane>
                <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
            </el-tabs>
            

        </div>
    </div>
</template>

<script>
export default {
     methods: {
      handleClick(tab, event) {
        console.log(tab);
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>