// SOCIAL MEDIA ICON
import fb_icon from "@/assets/images/icons/facebook.svg";
import twitter_icon from "@/assets/images/icons/twitter.svg";
import inst_icon from "@/assets/images/icons/insta.svg";
import pin_icon from "@/assets/images/icons/pinterest.svg";
import linkedin_icon from "@/assets/images/icons/linkedin.svg";

export const headerSocial = [
    {id : 0, img : fb_icon, names: "facebook-icon", link_name: "facebook link",},
    {id : 1, img : twitter_icon, names: "twitter-icon", link_name: "facebook link",},
    {id : 2, img : inst_icon, names: "instagram-icon", link_name: "facebook link",},
    {id : 3, img : pin_icon, names: "pinterest-icon", link_name: "facebook link",},
    {id : 4, img : linkedin_icon, names: "linkedin-icon", link_name: "facebook link",},
];

// CART ICON
import cart_icon from "@/assets/images/icons/cart.webp";
import rigid_icon from "@/assets/images/icons/rigid-icon.svg";
import retail_icon from "@/assets/images/icons/retail-icon.svg";
import cosmetic_icon from "@/assets/images/icons/cosmetic-icon.svg";
import food_icon from "@/assets/images/icons/food-icon.svg";
import display_icon from "@/assets/images/icons/display-icon.svg";
import shipping_icon from "@/assets/images/icons/shpping-icon.svg";
import gift_icon from "@/assets/images/icons/gift-icon.svg";
import packaging_icon from "@/assets/images/icons/eco-icon.svg";


// SITE LINK
export const Links = [
    {id : 1, name : "home"},
    {id : 2, name : "Boxes By Industry", 
       nestLi: [
            {id: 21, name : "Custom Right Boxes", img : rigid_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 22, name : "Retail Boxes", img : retail_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 23, name : "Cosmetic Boxes", img : cosmetic_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 24, name : "Custom Food Boxes", img : food_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 25, name : "Display Boxes", img : display_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 26, name : "Shipping Boxes", img : shipping_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 27, name : "Gift Boxes", img : gift_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
            {id: 28, name : "Packaging Sleeves", img : packaging_icon, moreLI : [
                {id: 31, name : "Custom book style boxes"},
                {id: 32, name : "Custom Collapsible Foldable Boxes"},
                {id: 33, name : "Custom Lift Off Detachable Boxes"},
                {id: 34, name : "Custom Hinged Flip Lid Boxes"},
                {id: 35, name : "Custom Magnetic Lock Boxes"},
                {id: 36, name : "Custom Match Slide Style Boxes"},
                {id: 37, name : "Custom One Piece Rigid Boxes"},
                {id: 38, name : "Custom Round Shaped boxes"},
                {id: 39, name : "Custom Shoulder Neck boxes"},
                {id: 40, name : "Custom Anklet boxes"},
            ]},
        ]
    },
    {id : 3, name : "Boxes By Style"},
    {id : 4, name : "Card Products"},
    {id : 5, name : "portfolio"},
    {id : 6, name : "Request a Quote"},
    {id : 7, name : "Contact Us"},
    {id : 8, image : cart_icon},
];