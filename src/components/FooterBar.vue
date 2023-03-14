<script setup lang="ts">
import links from '@/constants/links';

</script>
<template>
    <footer>
        <ul class="footer_links">
            <li class="hd">Shop by Category
                <ul class="sub">
                <li v-for="link in links" :key="link.category" class="grey">
                    <routerLink :to="link.link" class="grey"> {{ link.category }}</routerLink>
                </li>
                                    </ul>
            </li>
            <li class="hd">About
                <ul class="sub">
                    <li class="grey">Contact Us</li>
                    <li class="grey">About Us</li>
                </ul>
            </li>
            <li>Policy</li>
        </ul>
        <section class="contact">
            <div class="socials">
                <div class="social"> <img src="/images/facebook.png" alt="facebook" class="fb"></div>
                <div class="social"> <img src="/images/instagram.png" alt="instagram" class="gen"></div>
                <div class="social">
                    <img src="/images/twitter.png" alt="twitter" class="gen">
                </div>
            </div>
            <div class="location">
                <img src="/images/location.png" alt="location"> <span>Nigeria</span>
            </div>
            <div class="copyright grey">
                © 2023 | ibimina All Rights Reserved
            </div>
        </section>
    </footer>
</template>

<style scoped>
footer {
    background-color: #1B4B66;
    color: #fff;
    text-align: center;
    padding: 1em;
}


.social {
    background-color: #639599;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 1em 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.location img,
.gen {
    width: 20px;
}

.fb {
    width: 13px;
}

.location {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5em;
    gap: 1em;
}

.socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
}

.grey {
    color: #B6B6B6;
}

.hd {
    margin-bottom: 1em;
}

.sub {
    margin-top: 0.5em;
}

@media (min-width:40rem) {
    footer {
        display: flex;
        justify-content: space-between;
        padding: 3em;
    }

    .footer_links {
        display: flex;
        gap: 3em;
    }

    .hd {
        text-align: left;
    }

    .socials,
    .location {
        justify-content: flex-end;
    }

    .contact {
        text-align: right;
    }
}</style>