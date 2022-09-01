<script setup lang="ts">
    import Module from '@/components/Module.vue';
    import CategoryCard from '@/components/CategoryCard.vue';
    import BlogCard from '@/components/BlogCard.vue';
    import { getCategoriesAndBlogs } from '@/services/home';
    import { onBeforeMount, reactive, computed, watch } from 'vue';

    import {useRoute} from 'vue-router'
    const route: any = useRoute()

    const data: any = reactive({
        categories: [],
        blogs: []
    });

    const showCategories = computed(() => !!data?.categories?.length);
    const showBlogs = computed(() => !!data?.blogs?.length);

    async function fetchCategoriesAndBlogs(){
        const categories = await  getCategoriesAndBlogs(route.params.id);
        data.categories = categories;
        data.blogs = categories.filter((category: any) => category.type == 'blog');
    }

    onBeforeMount(fetchCategoriesAndBlogs);
    watch(() => route.params, fetchCategoriesAndBlogs);
</script>

<template>
    <div class="content">
        <module v-if="showCategories" :key="`cate-${route.params.id}`">
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
        <module v-if="showBlogs" :key="`blog-${route.params.id}`">
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
            // border-width: 1px;
            // border-style:  solid;
            // border-color: #d0d7de;
            margin-bottom: 15px;
            &:hover {
                opacity: 0.8;
            }
            transition: opacity 0.3s;
            background: #efefef;

            :last-child {
                border: 0px solid transparent;
                padding-bottom: 0;
                margin-bottom:0;
            }
        }
    }
</style>