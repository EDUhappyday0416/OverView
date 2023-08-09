<script setup>
</script>
<template>
    <div class="setting">
        <div class="setting__name">Hi XXX</div>
        <div class="setting__img">
            <img src="@/assets/logo.svg" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.setting {
    display: flex;
    background-color: aquamarine;
    justify-content: space-between;
    padding: 10px;

    &__img{
        max-width: 100%;
        height: auto;

        img{
            width: 30px;
        }
    }
}

</style>