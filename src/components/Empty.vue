<template>
    <div class="empty">这里什么都没有 TvT ...</div>
</template>
<style lang="scss" scoped>
.empty {
    margin-top: 20px;
    border:3px solid rgb(254, 247, 248);
    border-radius: 8px;
    color: #cc9999;
    display: flex;
    justify-content: center;
    padding: 10vh;
}
    
@media screen and (max-width:900px)  {
    .empty {
        font-size: 22px;
        border: 0px solid transparent;
    }
}
</style>