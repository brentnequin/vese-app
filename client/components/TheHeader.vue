<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand to="/" class="brand d-flex justify-content-center">
                <b-img width="47.5" src="~/static/favicon.svg" class="d-inline-block mr-2 align-center logo" alt="logo" />
                <p class="mb-0 align-self-center">VESE</p>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>                    
                    <b-nav-item to="/events">Events</b-nav-item>
                    <b-nav-item to="#">Members</b-nav-item>
                    <b-nav-item to="#">Log In</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>