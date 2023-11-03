<script>
export default {
    name: "Profile"
}
</script>

<template>
    <!-- profile start -->
    <section class="order-histry-area section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="order-history">
                        <div class="profile">
                            <div class="order-pro">
                                <div class="pro-img">
                                    <a href="javascript:void(0)"><img src="../assets/image/user-ava.jpg" alt="img"
                                                                      class="img-fluid"></a>
                                </div>
                                <div class="order-name">
                                    <h4>Andrew louise</h4>
                                    <span>Joined april 06, 2021</span>
                                </div>
                            </div>
                            <div class="order-his-page">
                                <ul class="profile-ul">
                                    <li class="profile-li"><a href="order-history.html"><span>Orders</span> <span
                                        class="pro-count">5</span></a></li>
                                    <li class="profile-li"><a href="profile.html" class="active">Profile</a></li>
                                    <li class="profile-li"><a href="pro-addresses.html">Address</a></li>
                                    <li class="profile-li"><a href="pro-wishlist.html"><span>Wishlist</span> <span
                                        class="pro-count">3</span></a></li>
                                    <li class="profile-li"><a href="pro-tickets.html"><span>My tickets</span> <span
                                        class="pro-count">4</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="profile-form">
                            <form>
                                <ul class="pro-input-label">
                                    <li>
                                        <label>First name</label>
                                        <input type="text" name="name" placeholder="First name">
                                    </li>
                                    <li>
                                        <label>Last name</label>
                                        <input type="text" name="name" placeholder="Last name">
                                    </li>
                                </ul>
                                <ul class="pro-input-label">
                                    <li>
                                        <label>Email address</label>
                                        <input type="text" name="name" placeholder="Email address" required>
                                    </li>
                                    <li>
                                        <label>Phone number</label>
                                        <input type="text" name="name" placeholder="Phone number">
                                    </li>
                                </ul>
                                <ul class="pro-input-label">
                                    <li>
                                        <label>New password</label>
                                        <input type="text" name="name" placeholder="New password">
                                    </li>
                                    <li>
                                        <label>Confirm password</label>
                                        <input type="text" name="name" placeholder="Confirm password">
                                    </li>
                                </ul>
                                <ul class="pro-submit">
                                    <li>
                                        <input type="checkbox" name="name">
                                        <label>Subscribe me to newsletter</label>
                                    </li>
                                    <li>
                                        <a href="profile.html" class="btn btn-style1">Update profile</a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- profile end -->
</template>

<style scoped>

/* order history page css */
.order-histry-area .order-history {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: -30px;
}

.order-histry-area .order-history .profile {
    width: calc(35% - 30px);
    margin-left: 30px;
    border: 1px solid #eee;
    border-radius: 5px;
}

.order-histry-area .order-history .profile .order-pro {
    padding: 30px;
    display: flex;
    align-items: center;
}

.order-histry-area .order-history .profile .order-pro .pro-img img {
    border: 3px solid #eee;
    border-radius: 100%;
}

.order-histry-area .order-history .profile .order-pro .order-name {
    margin-left: 15px;
}

.order-histry-area .order-history .profile .order-pro .order-name h4 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    line-height: 1;
}

.order-histry-area .order-history .profile .order-pro .order-name span {
    font-size: 13px;
    color: #9da9b9;
    margin-top: 12px;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a {
    position: relative;
    width: 100%;
    padding: 15px 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid #ddd;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a:after {
    background-color: #5fa800;
    content: '';
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 18px;
    width: 2px;
    height: 15px;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a.active:after {
    background-color: #fff;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a:hover {
    background-color: #f5f5f5;
    color: #333;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a.active {
    background-color: #5fa800;
    color: #fff;
    border-color: #5fa800;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a span.pro-count {
    background-color: #5fa800;
    width: 25px;
    height: 25px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a.active span.pro-count {
    background-color: #fff;
    color: #333;
}

.order-histry-area .order-history .order-info {
    width: calc(65% - 30px);
    margin-left: 30px;
}

.order-histry-area .order-history .order-info .table {
    border-top: 1px solid #eee;
}

.order-histry-area .order-history .order-info .table thead {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.order-histry-area .order-history .order-info .table thead tr th {
    padding-top: 11px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.order-histry-area .order-history .order-info .table tbody tr td {
    padding-top: 11px;
    padding-bottom: 10px;
}

.order-histry-area .order-history .order-info .table tbody tr td.canceled {
    color: #ff5252;
}

.order-histry-area .order-history .order-info .table tbody tr td.process {
    color: #50c6e9;
}

.order-histry-area .order-history .order-info .table tbody tr td.delayed {
    color: #ffb74f;
}

.order-histry-area .order-history .order-info .table tbody tr td.delivered {
    color: #43d9a3;
}

/* profile page css */
.order-histry-area .order-history .profile-form {
    width: calc(65% - 30px);
    margin-left: 30px;
}

.order-histry-area .order-history .profile-form form ul.pro-input-label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -30px;
    margin-top: 15px;
}

.order-histry-area .order-history .profile-form form ul.pro-input-label:first-child {
    margin-top: 0px;
}

.order-histry-area .order-history .profile-form form ul.pro-input-label li {
    width: calc(50% - 30px);
    margin-left: 30px;
}

.order-histry-area .order-history .profile-form form ul.pro-input-label li label {
    font-size: 14px;
}

.order-histry-area .order-history .profile-form form ul.pro-input-label li input {
    width: 100%;
    border: 1px solid #eee;
    margin-top: 10px;
    border-radius: 5px;
}

.order-histry-area .order-history .profile-form form ul.pro-submit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
}
</style>