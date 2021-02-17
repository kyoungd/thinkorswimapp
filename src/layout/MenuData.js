export const MenuData = [
    {
        name: "Home",
        href: "/",
        has_children: false,
    },
    {
        name: "Products",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Products",
                href: "/services",
                has_children: false,
            },
            {
                name: "Product Details",
                href: "/service_details",
                has_children: false,
            }
        ]
    },
    {
        name: "Account",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Login",
                href: "/login",
                has_children: false,
            },
            {
                name: "Cart",
                href: "/cart",
                has_children: false,
            },
            {
                name: "Contact Us",
                href: "/contact",
                has_children: false,
            },
            {
                name: "FAQ",
                href: "/faqs",
                has_children: false,
            },
            {
                name: "404 Error",
                href: "/error",
                has_children: false,
            }
        ]
    },
    {
        name: "Pages",
        href: "#!",
        has_children: true,
        children: [
            {
                name: "Shop",
                href: "/shop",
                has_children: false,
            },
            {
                name: "Single Product",
                href: "/product_details",
                has_children: false,
            },
            {
                name: "Checkout",
                href: "/checkout",
                has_children: false,
            },
        ]
    }
]