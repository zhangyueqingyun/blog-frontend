<script setup lang="ts">
    import Module from './components/Module.vue';
    import CategoryCard from '@/components/CategoryCard.vue';
    import BlogCard from '@/components/BlogCard.vue';
    import { getCategoriesAndBlogs } from '@/services/home';
    import { onBeforeMount, reactive, watch, toRefs } from 'vue';

    const props: any = defineProps({
        nav: Object
    })

    const data: any = reactive({
        categories: [],
        blogs: []
    });

    async function fetchCategoriesAndBlogs(){
        const {categories, blogs} = await  getCategoriesAndBlogs(props.nav.id);
        data.categories = categories;
        data.blogs = blogs;
    }

    onBeforeMount(fetchCategoriesAndBlogs);

    watch(props, fetchCategoriesAndBlogs);
</script>

<template>
    <div class="content">
        <module>
            <template v-slot:top>目录</template>
            <template v-slot:default>
                <div class="categories">
                    <category-card 
                        v-for="category of data.categories"
                        :key="category.id"
                        :category="category"
                    />
                </div>
            </template>
        </module>
        <module>
            <template v-slot:top>文章</template>
            <template v-slot:default>        
                <blog-card 
                    v-for="blog of data.blogs"
                    :key="blog.id"
                    :blog="blog"
                />
            </template>
        </module>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        margin-top: 30px;
        .categories {
            padding: 10px;
            border-radius: 6px;
            border-width: 1px;
            border-style:  solid;
            border-color: #d0d7de;
            margin-bottom: 15px;

            :last-child {
                border: 0px solid transparent;
                padding-bottom: 0;
                margin-bottom:0;
            }
        }
    }
</style>