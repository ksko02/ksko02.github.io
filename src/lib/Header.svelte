<script lang="ts">
    export let condition: number;
    import { base } from '$app/paths';
</script>

<main>

    <div id="block">
		<div>
			{#if condition === 2}
				<a href="{base}/" id="cl">About me</a>
			{:else if condition === 1}
				<a href="{base}/about" id="cl">Surprise!</a> 
			{/if}
		</div>
        <div class="tit_div">
            <h2 class="title">Oksana (Ksusha) Konovalova</h2>
        </div>
        <div class="social1 instagram">
            <a href="https://instagram.com/ksko.02" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
        </div>
        <div class="social2 vk">
            <a href="https://vk.com/ksushakonovalova" target="_blank"><i class="fa fa-vk fa-2x"></i></a>    
        </div>
        <div class="social3 telegram">
            <a href="http://t.me/ksko02" target="_blank"><i class="fa fa-paper-plane fa-2x"></i></a>
        </div>
        <div class="social4 github">
            <a href="https://github.com/ksko02" target="_blank"><i class="fa fa-github fa-2x"></i></a>
        </div>	
    </div>
</main>

<style>
    @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
	main{
		background-color:#556672;
		letter-spacing: 2px;
		padding: 0.5em;
		background: #556672 url(https://sun9-west.userapi.com/sun9-7/s/v1/if1/mC1taWnXAz_CNzyeuqE6UJGASOsl3xMdhEyouVeljeOc6_bd5QgIykca17Mo0QPjZdw_7DiL.jpg?size=1280x960&quality=96&type=album);
		background-size: 150px 110px;
		background-repeat:no-repeat; 
	}

	.title{
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		color: #DADEDF;
		
	}
	
	.tit_div{
		margin:0 auto;
	}

	#cl{
		margin-top: 0;
        padding-top: 37px;
        padding-left: 180px;
		height: 50px;
        width: 100%;
		position: fixed;
        left: 0;
        top: 0;
		color: #DADEDF;
	}
	
		
	.social1 a {
		position: absolute;
		top: 30px;
		right: 190px;
		text-align: center;
		width: 35px;
		height: 35px;
		background: #DADEDF;
		border: 1px solid #ccc;
		box-shadow: 0 2px 4px rgba(0,0,0,0.15), inset 0 0 50px rgba(0,0,0,0.1);
		border-radius: 24px;
		margin: 0 10px 10px 0;
		padding: 6px;
		color: #000;
	}

	.social2 a {
		position: absolute;
		top: 30px;
		right: 70px;
		text-align: center;
		width: 35px;
		height: 35px;
		background: #DADEDF;
		border: 1px solid #ccc;
		box-shadow: 0 2px 4px rgba(0,0,0,0.15), inset 0 0 50px rgba(0,0,0,0.1);
		border-radius: 24px;
		margin: 0 10px 10px 0;
		padding: 6px;
		color: #000;
	}

	.social3 a {
		position: absolute;
		top: 30px;
		right: 130px;
		text-align: center;
		width: 35px;
		height: 35px;
		background: #DADEDF;
		border: 1px solid #ccc;
		box-shadow: 0 2px 4px rgba(0,0,0,0.15), inset 0 0 50px rgba(0,0,0,0.1);
		border-radius: 24px;
		margin: 0 10px 10px 0;
		padding: 6px;
		color: #000;
	}
	.social4 a {
		position: absolute;
		top: 30px;
		right: 10px;
		text-align: center;
		width: 35px;
		height: 35px;
		background: #DADEDF;
		border: 1px solid #ccc;
		box-shadow: 0 2px 4px rgba(0,0,0,0.15), inset 0 0 50px rgba(0,0,0,0.1);
		border-radius: 24px;
		margin: 0 10px 10px 0;
		padding: 6px;
		color: #000;
	}

	.instagram a:hover {
		background: #9b52bf;
		color: #fff;
	}
	.telegram a:hover {
		background: #249bd7; 
		color: #fff;
	}

	.github a:hover {
		background: #191919; 
		color: #fff;
	}

	.vk a:hover {
		background: #5d84ae; 
		color: #fff;
	}

	#block{
		display: flex;
		justify-content: space-between;

	}
</style>