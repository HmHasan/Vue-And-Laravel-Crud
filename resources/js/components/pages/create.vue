<template>
    <div>
        <div class="row">
            <div class="col-md-6 offset-3">
                <form @submit.prevent="CreateCategory">
                    <div class="form-group">
                        <label for="">Category Name</label>
                        <input type="text" class="form-control" v-model="name" name="name">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Submit</button>
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
            CreateCategory()
            {
               axios.post(`/api/category`,{name:this.name}).then(response=>{
                   this.name = "";
               })
            }
        }
}
</script>
<style scoped>

</style>
