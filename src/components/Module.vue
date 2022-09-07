<template>
    <div class="module">
         <div class="header">
            <div class="title"><slot name="top"></slot></div>
            <!-- <div class="right">更多</div> -->
        </div>
        <div>
            <slot></slot>
        </div>   
    </div>
</template>

<style scoped lang="scss">
   .module {
        margin-top: 20px;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: bottom;
            margin-bottom: 12px;
            padding-bottom: 5px;
            border-bottom: 1px solid #dcddde;
            .title {
                font-size: 14px;
                color: #24292f;
                font-weight: 400;
                border-bottom: 2px solid #eecccc;
                padding: 3px 7px;
                border-radius: 10px;
            }
            // .right {
            //     font-size: 10px;
            //     color: #0969da;
            //     font-weight: 300;
            // }
        }
   }
</style>