<template>
    <header>
        <h1>Buy</h1>
        <input type="search" name="search" placeholder="I'm shopping for" class="bg search">
        <nav class="nav">
            <ul class="links">
                <li class="bg wishlist"><routerLink to="/wishlist"></routerLink></li>
                <li class="bg user"><routerLink to="/user"></routerLink></li>              
                <li class="bg cart"> <routerLink to ="/cart"></routerLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    align-items: center;
    padding: 1em;
}
.nav{
    grid-column: 5;
}

.links{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1em;
}
.bg{
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.search{
    width: auto;
    height: auto;
    display: block;
    grid-column: 1/6;
    grid-row: 2;
    padding: 1em 1em 1em 3em;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-position: 1em;
    background-size: 18px;
    background-image: url('../assets/categories/search.svg');
}
.wishlist{
    background-image: url('../assets/categories/icons8-wishlist.png');
}
.user{
    background-image: url('../assets/categories/icons8-user.png');
}
.cart{
    background-image: url('../assets/categories/icons8-cart.png');
    filter: brightness(0%);
}
@media (min-width:60rem){
    header{
        grid-template-columns:repeat(12,1fr);
        gap: 2em;
    }
.search{
    grid-column: 8/13;
    grid-row: 1;
}
.nav{
    grid-column: 13;
}
}
</style>