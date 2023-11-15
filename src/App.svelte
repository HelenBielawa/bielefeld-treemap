<script>
	import Navbar from './components/Navbar.svelte';
	import Map from './components/Map.svelte';
	import LineChart from './components/lineChart.svelte';
	import ndvi_data from './data/NDVI_bielefeld.json';
	import TreesPerDistrict from './data/TreesPerDistrict.png';
	import Chatbot from './components/Chatbot.svelte';
</script>

<html lang="de">

<div class="app">
	<Navbar />
	<Map />
	<a href="https://www.codefor.de/bielefeld/" class="fixed-button" target="_blank" rel="noopener noreferrer">
		<img src="src/data/CodeFor-bielefeld.svg" alt="Button Icon" class="button-icon">
	</a>
<div>

</div>
</html>
  
<style>
	.app {
	  text-align: center;
	  background-color: #F8F4E3;
	  width: 100%;
	  height: 100%;
	  margin: auto;
	  position: relative;
	}

	.fixed-button {
	  position: fixed;
	  bottom: 20px;
	  right: 20px;
	  z-index: 999;
	}

	.button-icon {
	  width: 80px;
	  height: 80px;
	}
</style>
