<template>
    <div>
        <slot name="header">이것은 슬롯의 디폴트 헤더</slot>
        <slot name="middle">이것은 슬롯의 디폴트 바텀</slot>
        <slot name="bottom">이것은 슬롯의 디폴트 바텀</slot>
    </div>
</template>


<script>
    export default {
        name:'modal'
    }
</script>