<template>
<page>
  <jumbotron-hero
    slot="masthead"
    bg-img-src="rohan-gangopadhyay-heIaYq6A7tg-unsplash.jpg"
    fluid
  />
  <b-container class="my-5" slot="content">
    <jumbotron-hero bg-img-src="/VESE-01.png" bg-color="black" contain style="transform: translateY(-8rem)" />
    <b-jumbotron class="mb-5">
      <h1>Our Goal</h1>
      <p>To expand the knowledge of students interested in vehicle electronics and systems engineering through hands on
        projects and close work with companies.</p>
      <divider />
      <p>Click the links below to learn more about VESE.</p>
      <b-button variant="primary" to="/about">About VESE</b-button>
      <b-button variant="secondary" to="#current-projects">Current Projects</b-button>
      <b-button variant="secondary" to="/gallery">Gallery</b-button>
      <b-button variant="secondary" to="/login">Join Us</b-button> 
    </b-jumbotron>

    <divider />

    <h2 id="current-projects">News</h2>
    <b-card-group deck>
      <b-card 
        title="Mechatronics Team"
        img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/veseneon_orig.png"
        style="max-width: 20rem;"
      >
        <b-card-text>VESE's mechatronics team is leading the push for developing, manufacturing and racing electric and autonomous vehicles.</b-card-text>
        <b-button to="#">Read More</b-button>
      </b-card>
      <b-card 
        title="Software Team"
        img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/tesla-ipad-3_orig.jpg"
        style="max-width: 20rem;"
      >
        <b-card-text> Our software team applies the information obtained from their research to advance the development of autonomous vehicles.</b-card-text>
        <b-button to="#">Read More</b-button>
      </b-card>
      <b-card 
        title="Avionics Team"
        img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/ecu_orig.jpg"
        style="max-width: 20rem;"
      >
        <b-card-text> The avionics team is dedicated to the development of the first ever unmanned aerial vehicle at VESE.</b-card-text>
        <b-button to="#">Read More</b-button>
      </b-card>
    </b-card-group>
  </b-container>
  </page>
</template>

<script>
import JumbotronHero from '~/components/JumbotronHero.vue';
export default {
    name: "IndexPage",
    components: { JumbotronHero }
}
</script>
