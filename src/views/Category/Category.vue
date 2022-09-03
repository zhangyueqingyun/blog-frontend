<script setup lang="ts">
    import Module from '@/components/Module.vue';
    import CategoryCard from '@/components/CategoryCard.vue';
    import BlogCard from '@/components/BlogCard.vue';
    import Loading from '@/components/Loading.vue';
    import { getCategoriesAndBlogs } from '@/services/home';

    import { onBeforeMount, reactive, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route: any = useRoute()

    const data: any = reactive({
        categories: undefined,
        blogs: undefined
    });

    async function fetchCategoriesAndBlogs(){
        const categories = await  getCategoriesAndBlogs(route.params.id);
        data.categories = categories;
        data.blogs = categories.filter((category: any) => category.type == 'blog');
    }

    onBeforeMount(fetchCategoriesAndBlogs);
    watch(() => route.params, fetchCategoriesAndBlogs);
</script>

<template>
    <loading :visible="!data?.blogs || !data?.categories"/>
    <div class="content">
        <module v-if="data?.categories?.length" :key="`cate-${route.params.id}`">
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
        <module v-if="data?.blogs?.lengths" :key="`blog-${route.params.id}`">
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
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 15px;
            transition: opacity 0.3s;
            :last-child {
                border: 0px solid transparent;
            }
        }
    }
</style>