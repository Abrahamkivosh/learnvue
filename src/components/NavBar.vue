<template>
  <nav class="nav justify-content-center">
    <a class="nav-link active" href="#">Home</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link " href="#"> link</a>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    
    width: 100%;
    height: 10%;
    height: auto;
    background: linear-gradient(40deg , rgb(84, 84, 218) , rgb(213, 135, 225));
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
}
.nav .nav-link{
    text-decoration: none;
    font-size: 2rem;
    text-align: center;
    border-right: 2px solid rgb(149, 28, 186);
    padding: 5px 10px;
    margin: 2px;
    height: 100% ;
    display: inline-block;
    color: wheat;
    font-weight: bold;
  
}
.nav .nav-link:hover{
  background:linear-gradient(40deg , rgb(84, 218, 140) , rgb(225, 192, 135)); ;
}
</style>