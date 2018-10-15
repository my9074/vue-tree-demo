<template>
  <div>
    <v-tree ref='tree' :data='treeData' :expanded="true"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData: [
        {
          title: "node1",
          expanded: true,
          children: [
            {
              title: "node 1-1",
              expanded: true,
              children: [
                {
                  title:
                    "<span style='color: red'><i class='jc-icon-document'></i> 这是一段 JSX</span>"
                },
                {
                  title: " 这是一段文字"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
</style>
