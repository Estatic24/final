import img1 from "../components/img/antimage.png";
import img2 from "../components/img/axe.png";
import img3 from "../components/img/bane.png";
import img4 from "../components/img/pudge.png";
import img5 from "../components/img/crystal_maiden.png";
import img6 from "../components/img/drow_ranger.png";

import ability1 from '../components/img/Mana_Void_icon.webp';
import ability2 from '../components/img/Blink_29_icon.webp';
import ability3 from '../components/img/Counterspell_icon.webp';

import ability4 from '../components/img/Berserkers_Call_icon.webp';
import ability5 from '../components/img/Battle_Hunger_icon.webp';
import ability6 from '../components/img/Culling_Blade_icon.webp';

import ability7 from '../components/img/Enfeeble_icon.webp';
import ability8 from '../components/img/Nightmare_icon.webp';
import ability9 from '../components/img/Fiends_Grip_icon.webp';

import ability10 from '../components/img/Meat_Hook_icon.webp';
import ability11 from '../components/img/Rot_icon.webp';
import ability12 from '../components/img/Dismember_icon.webp';

import ability13 from '../components/img/Crystal_Nova_icon.webp';
import ability14 from '../components/img/Frostbite_icon.webp';
import ability15 from '../components/img/Freezing_Field_icon.webp';

import ability16 from '../components/img/Frost_Arrows_icon.webp';
import ability17 from '../components/img/Gust_icon.webp';
import ability18 from '../components/img/Marksmanship_icon.webp';

import video1 from '../components/video/Mana Void.wmv.mp4';
import video2 from '../components/video/Blink.wmv.mp4';
import video3 from '../components/video/Spell Shield.wmv.mp4';

import video4 from '../components/video/Berserkers Call.wmv.mp4';
import video5 from '../components/video/Battle Hunger.wmv.mp4';
import video6 from '../components/video/Culling Blade.mp4';

import video7 from '../components/video/Enfeeble.wmv.mp4';
import video8 from '../components/video/Nightmare (Self).wmv.mp4';
import video9 from '../components/video/Fiends Grip.wmv.mp4';

import video10 from '../components/video/Meat Hook.wmv.mp4';
import video11 from '../components/video/Rot (Creeps).wmv.mp4';
import video12 from '../components/video/Dismember.wmv.mp4';

import video13 from '../components/video/Crystal Nova.wmv.mp4';
import video14 from '../components/video/Frostbite.wmv.mp4';
import video15 from '../components/video/Freezing Field (Creeps).wmv.mp4';

import video16 from '../components/video/Frost Arrows (Running).wmv.mp4';
import video17 from '../components/video/Silence.wmv.mp4';
import video18 from '../components/video/Marksmanship.wmv.mp4';

const characters = [
  {
    id: 1,
    name: "Anti-Mage",
    image: img1,
    class: "Carry",
    health: 560,
    mana: 180,
    lore: "Anti-Mage is a versatile agility hero whose abilities counter mana-dependent heroes.",
    abilities: [
      { name: "Mana Void", image: ability1, description: "Burns an opponent's mana on each attack.", video: video1 },
      { name: "Blink", image: ability2, description: "Short distance teleportation.", video: video2 },
      { name: "Counterspell", image: ability3, description: "Increases magic resistance.", video: video3 },
    ]
  },
  {
    id: 2,
    name: "Axe",
    image: img2,
    class: "Initiator",
    health: 700,
    mana: 243,
    lore: "Axe is a powerful tank and initiator who thrives in close combat and can turn the tide of battles.",
    abilities: [
      { name: "Berserker's Call", image: ability4, description: "Taunts nearby enemies, forcing them to attack Axe.", video: video4 },
      { name: "Battle Hunger", image: ability5, description: "A damage over time ability that slows the enemy.", video: video5 },
      { name: "Culling Blade", image: ability6, description: "Instantly kills a low-health enemy.", video: video6 },
    ]
  },
  {
    id: 3,
    name: "Bane",
    image: img3,
    class: "Support",
    health: 510,
    mana: 300,
    lore: "Bane is a support hero with a wide array of abilities that can disable enemies and reduce their effectiveness in battle.",
    abilities: [
      { name: "Enfeeble", image: ability7, description: "Reduces enemy's attack damage and healing.", video: video7 },
      { name: "Nightmare", image: ability8, description: "Puts the target to sleep.", video: video8 },
      { name: "Fiend's Grip", image: ability9, description: "Channeling spell that disables and damages the target.", video: video9 },
    ]
  },
  {
    id: 4,
    name: "Pudge",
    image: img4,
    class: "Tank",
    health: 700,
    mana: 243,
    lore: "Pudge is a durable hero who excels at isolating and eliminating enemies with his signature Meat Hook.",
    abilities: [
      { name: "Meat Hook", image: ability10, description: "Launches a bloody hook to drag.", video: video10 },
      { name: "Rot", image: ability11, description: "Deals damage and slows enemies around Pudge.", video: video11 },
      { name: "Dismember", image: ability12, description: "Channeled disable and damage ability.", video: video12 },
    ]
  },
  {
    id: 5,
    name: "Crystal Maiden",
    image: img5,
    class: "Support",
    health: 510,
    mana: 300,
    lore: "Crystal Maiden is a support hero who provides crowd control and mana regeneration for her team.",
    abilities: [
      { name: "Crystal Nova", image: ability13, description: "Damages and slows enemies in an area.", video: video13 },
      { name: "Frostbite", image: ability14, description: "Roots and damages an enemy.", video: video14 },
      { name: "Freezing Field", image: ability15, description: "Area-of-effect ultimate that deals massive damage.", video: video15 },
    ]
  },
  {
    id: 6,
    name: "Drow Ranger",
    image: img6,
    class: "Carry",
    health: 560,
    mana: 180,
    lore: "Drow Ranger is a ranged agility hero who excels at dealing damage from a distance.",
    abilities: [
      { name: "Frost Arrows", image: ability16, description: "Imbues arrows with ice, slowing the enemy.", video: video16 },
      { name: "Gust", image: ability17, description: "Silences and knocks back enemies.", video: video17 },
      { name: "Marksmanship", image: ability18, description: "Increases agility and grants a chance to deal.", video: video18 },
    ]
  },
];
  
  export default characters;