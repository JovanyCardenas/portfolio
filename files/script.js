"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("current-year");
    const menuButton = document.getElementById("menu-button");
    const navigation = document.getElementById("site-navigation");

    // Automatically update the copyright year
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
    }

    // Stop here if the mobile navigation elements are not present
    if (!menuButton || !navigation) {
        return;
    }

    const closeMenu = () => {
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    const openMenu = () => {
        navigation.classList.add("is-open");
        document.body.classList.add("menu-open");

        menuButton.setAttribute("aria-expanded", "true");
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    };

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the mobile menu after selecting a navigation link
    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close the menu when clicking outside it
    document.addEventListener("click", (event) => {
        const clickedInsideNavigation = navigation.contains(event.target);
        const clickedMenuButton = menuButton.contains(event.target);

        if (
            navigation.classList.contains("is-open") &&
            !clickedInsideNavigation &&
            !clickedMenuButton
        ) {
            closeMenu();
        }
    });

    // Close the menu with the Escape key
    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            navigation.classList.contains("is-open")
        ) {
            closeMenu();
            menuButton.focus();
        }
    });

    // Reset the mobile menu when returning to desktop size
    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            closeMenu();
        }
    });
});
