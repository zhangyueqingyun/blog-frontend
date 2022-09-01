<script setup lang="ts">
    import Module from '@/components/Module.vue';
    import CategoryCard from '@/components/CategoryCard.vue';
    import BlogCard from '@/components/BlogCard.vue';
    import { getCategoriesAndBlogs } from '@/services/home';
    import { onBeforeMount, reactive, watch, computed } from 'vue';

    const props: any = defineProps({
        nav: Object
    })

    const data: any = reactive({
        categories: [],
        blogs: []
    });

    const showCategories = computed(() => !!data?.categories?.length);
    const showBlogs = computed(() => !!data?.blogs?.length);

    async function fetchCategoriesAndBlogs(){
        const categories = await  getCategoriesAndBlogs(props.nav.id);
        data.categories = categories;
        data.blogs = categories.filter((category: any) => category.type == 'blog');
    }

    onBeforeMount(fetchCategoriesAndBlogs);

    watch(props, fetchCategoriesAndBlogs);
</script>

<template>
    <div class="content">
        <module v-if="showCategories" :key="`cate-${props.nav.id}`">
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
        <module v-if="showBlogs" :key="`blog-${props.nav.id}`">
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
            // border-width: 1px;
            // border-style:  solid;
            // border-color: #d0d7de;
            margin-bottom: 15px;
            transition: opacity 0.3s;

            :last-child {
                border: 0px solid transparent;
            }
        }
    }
</style>