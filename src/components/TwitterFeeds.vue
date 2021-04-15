<template>
    <div>
        <h3 class="feeds-title">Twitter Feeds</h3>
        <div class="feeds">
            <div class="feed-block">
                <span class="feed-org-title">BBCAfrica</span>
                <div class="feed-container">
                    <TwitterFeed class="feed" src="https://twitter.com/BBCAfrica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" dark=true></TwitterFeed>
                </div>
            </div>

            <div class="feed-block">
                <span class="feed-org-title">Ethereum</span>
                <div class="feed-container">
                    <TwitterFeed class="feed" src="https://twitter.com/ethereum?lang=en" dark=true></TwitterFeed>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "TwitterFeeds",
}
</script>

<style scoped>
.feeds-title{
    margin-bottom: 25px;
    font-size: 1.6rem;
}
.feeds{
    width: 80%; 
    margin: 25px auto;
    display: flex;
    justify-content: space-around;
}
.feed-org-title{
    font-size: 1.5rem;
    margin-bottom: 10px;
}
.feed-container{
    height: 300px;
    width: 400px;
    overflow: auto;
}

</style>