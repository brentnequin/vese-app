<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand to="/" class="brand">
                <b-img fluid src="~/static/VESELogoPatchWhite.svg" class="d-inline-block align-center logo" alt="logo"></b-img>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>                    
                    <b-nav-item to="/events">Events</b-nav-item>
                    <b-nav-item to="/members">Members</b-nav-item>
                    <b-nav-item to="/login">Log In</b-nav-item>
                    <b-nav-item to="#">Donate</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>