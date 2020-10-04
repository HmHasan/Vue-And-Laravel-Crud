<template>
    <div>
        <div class="container">
        <div class="d-flex justify-content-between w-100">
            <h2>Index</h2>
            <router-link :to="{name:'category-create'}" class="btn btn-primary mb-2">Create New</router-link>
        </div>
        <table class="table-bordered table">

            <tr>
                <th style="width: 170px">SL</th>
                <th>Name</th>
                <th>Slug</th>
                <th style="width: 170px">Action</th>
            </tr>
            <tbody>
            <tr v-for="categories in category" :key="categories.id">
                <td>{{categories.id}}</td>
                <td>{{categories.name}}</td>
                <td>{{categories.slug}}</td>
                <td style="width: 170px">
                    <router-link  :to="{name:'category-edit',params: {id:categories.id}}" class="btn btn-success btn-sm">Update</router-link>
                    <a @click.prevent="DeleteCategory(categories)" href="#" class="btn btn-danger btn-sm">Delete</a>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>


export default
{
    data()
    {
        return{
            category:[],
        }
    },
    methods:
        {
           loadData:function ()
           {
               axios.get('/api/category ').then(response=>{
                  this.category = response.data;
               })
           },
            DeleteCategory(categories)
            {
                axios.delete(`/api/category/${categories.id}`).then(()=>{
                    console.log(categories);
                });

               let index = this.category.indexOf(categories)
                this.category.splice(index,1);




            }
        },

    mounted() {
        this.loadData();
    }
}
</script>
<style scoped>

</style>
