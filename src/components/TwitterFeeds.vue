<template>
    <div class="feeds">
        <div class="feed-container">
            <TwitterFeed class="feed" src="https://twitter.com/BBCAfrica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"></TwitterFeed>
        </div>
        <div class="feed-container">
            <TwitterFeed class="feed" src="https://twitter.com/ethereum?lang=en"></TwitterFeed>
        </div>
        
    </div>
   
</template>

<script>
export default {
    name: "TwitterFeeds",
}
</script>

<style scoped>
.feeds{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
}
.feed-container{
    height: 300px;
    overflow: auto;
}

</style>