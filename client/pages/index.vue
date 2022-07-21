<template>
  <b-container class="my-5">

    <b-jumbotron header="VESE" lead="Vehicle Electronics and Systems Engineering">
      <p>Expand the knowledge of students interested in vehicle electronics and systems engineering through hands on projects and close work with companies.</p>
      <divider />
      <p>Click the links below to learn more about VESE.</p>
      <b-button variant="info" to="/about">About VESE</b-button>
      <b-button variant="secondary" to="#current-projects">Current Projects</b-button>
      <b-button variant="secondary" to="#current-projects">Gallery</b-button>
    </b-jumbotron>

    <divider />

    <h2 id="current-projects">Current Projects</h2>
    <b-card-group deck>
      <b-card 
        title="FSAE Electric Vehicle"
        img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/veseneon_orig.png"
        style="max-width: 20rem;"
      >
        <b-card-text>VESE is leading the push for developing, manufacturing and racing the first ever UIC FSAE Electric vehicle.</b-card-text>
        <b-button to="#">Read More</b-button>
      </b-card>
      <b-card 
        title="Mechanical Team"
        img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/tesla-ipad-3_orig.jpg"
        style="max-width: 20rem;"
      >
        <b-card-text>Mechanical Engineering students apply the information learned from class or on their own time to develop the systems of the FSAE Electric vehicle.</b-card-text>
        <b-button to="#">Read More</b-button>
      </b-card>
      <b-card 
        title="Electrical team"
        img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/ecu_orig.jpg"
        style="max-width: 20rem;"
      >
        <b-card-text>Electrical Engineering students developing the first ever electrical vehicle systems at UIC.</b-card-text>
        <b-button to="#">Read More</b-button>
      </b-card>
    </b-card-group>
  </b-container>

</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
