<script setup>
$('#myModal1').modal('show');

</script>

<template>
    <!-- newsletter pop-up start -->
    <div class="vegist-popup animated modal fadeIn" id="myModal1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="popup-content">
                        <!-- popup close button start -->
                        <a href="javascript:void(0)" data-bs-dismiss="modal" aria-label="Close" class="close-btn"><i
                            class="ion-close-round"></i></a>
                        <!-- popup close button end -->
                        <!-- popup content area start -->
                        <div class="pop-up-newsletter" style="background: url(/src/assets/image/news-popup.jpg);">
                            <div class="logo-content">
                                <a href="index2.html"><img src="../assets/image/logo2.png" alt="image"
                                                           class="img-fluid"></a>
                                <h4>Become a subscriber</h4>
                                <span>Subscribe to get the notification of latest posts</span>
                            </div>
                            <div class="subscribe-area">
                                <input type="text" name="comment" placeholder="Your email address">
                                <a href="index2.html" class="btn btn-style1">Subscribe</a>
                            </div>
                        </div>
                        <!-- popup content area end -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- newsletter pop-up end -->
</template>

<style scoped>

</style>