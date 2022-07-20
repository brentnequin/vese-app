<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand href="#" class="brand">
                <img fluid src="~/static/favicon.svg" class="d-inline-block align-center logo" alt="logo">
                VESE
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/about">About</b-nav-item>
                    <b-nav-item href="#">Events</b-nav-item>
                    <b-nav-item href="#">Members</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>