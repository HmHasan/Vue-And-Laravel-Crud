<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-3">
                <form @submit.prevent="UpdateCategory">
                    <div class="form-group">
                        <label for="">Category Name</label>
                        <input type="text" class="form-control" v-model="name" name="name">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default
{
    data()
    {
        return{
            name:'',
        }
    },
    methods:
        {
            UpdateCategory()
            {
                let id = this.$route.params.id;
                axios.put(`/api/category/${id}`,{name:this.name}).then(()=>{
                })
            },
            loadCategory()
            {
                let id = this.$route.params.id;
                axios.get(` /api/category/${id}/edit`).then(response=>{
                   this.name = response.data.name;
                })
            }
        },
    mounted() {
        this.loadCategory();
    }
}
</script>
<style scoped>

</style>
