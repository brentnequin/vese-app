<template>
    <page>
        <jumbotron-hero slot="masthead" header="Building Towards the Future" lead="VESE is an organization dedicated to fostering the growth of aspiring engineers in Automotive and Robotics Industry. Our members participate in various competitions that feature intelligent vehicles such as RMC NASA, IGVC, and Purdue EV Grand Prix. Our Alumni have primarily worked at CNH Industrial and Navistar in Controls and Software Engineering. The automotive industry is continously evolving, and want to continue exploring the field to to create better designs for real world applications."
            bg-img-src="https://vese-uic.weebly.com/uploads/1/1/4/2/114284319/background-images/1491183464.jpg" dark
            fluid />
        <b-container class="my-5" slot="content">
            <div>
                <b-tabs content-class="mt-3" toggle-class="text-dark" align ="center">
                    <b-tab title="Overview" title-link-class="tab"><p>With the growing presence of electric vehicles and AI auto solutions in the industry, VESE seeks to better model and simulate driverless transport systems that can be used in manufacturing and industrial applications.</p></b-tab>
                    <b-tab title="History" title-link-class="tab"><p>Founded in 2018, VESE is a relatively new organization located at the University of Illinois at Chicago. Our previous Presidents include Amru Qutub, who has worked on electromechanical systems at CNH Industrial for over a year, and Emily Hernandez who organized VESE's first competition at RMC NASA, where we won our first ever award for innovation. Emily Hernandez has had internships at Tesla and Google. Both leaders are currently in the industry and want to continue exploring the field. Our current President is Benjamin Martinez, who seeks to push VESE onto new heights.</p></b-tab>
                    <b-tab title="Membership" title-link-class="tab" class="text-center"><p>At the moment membership is reserved for students at the University of Illinois at Chicago and Alumni. Meetings are held at the UIC Makerspace. Check out our events page for more information.</p></b-tab>
                    <b-tab title="Policies" title-link-class="tab"></b-tab>
                    <b-tab title="Contact Us" title-link-class="tab" class="text-center">
                        <b-card no-body class="overflow-hidden" style="max-width: 1080px;">
                            <b-row class = "full-width" no-gutters>
                                <b-col md="6">
                                    <b-card-img src="/max-bender.jpg" alt="Cta_Image" class="rounded-0"></b-card-img>
                                </b-col>
                                <b-col md="6">
                                    <b-card-body body-class="text-center" title="Contact Info">
                                        <b-card-text>
                                            <p>Benjamin Martinez
                                            <br>President of VESE
                                            <br>Email: bmarti55@uic.edu
                                            </p>
                                        </b-card-text>
                                    </b-card-body>
                                </b-col> 
                            </b-row> 
                        </b-card>
                    </b-tab>                        
                </b-tabs>
            </div>
        </b-container>
    </page>
</template>
<style>
.tab {
  color: black
}
.tab:hover{
    color:grey
}
</style>