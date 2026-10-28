import { Building2, Hammer, ChefHat, Bath, Sofa, Home, Layers, PaintRoller, Wrench, Store, ClipboardList, Lightbulb } from "lucide-react";
import kitchen from "@/assets/kitchen.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import bathroom from "@/assets/bathroom.jpg";
import bathroomBefore from "@/assets/bathroom-before.jpg";
import commercial from "@/assets/commercial.jpg";
import exterior from "@/assets/exterior.jpg";
import interior from "@/assets/interior.jpg";
import hero from "@/assets/hero.jpg";

export const SERVICES = [
  { icon: Building2, title: "General Contracting", desc: "Full-service project leadership from planning and permits to final walkthrough.", benefits: ["Single point of contact", "Vetted subcontractors", "On-time scheduling"] },
  { icon: Home, title: "Home Remodeling", desc: "Whole-home and room-by-room remodels that fit how your family lives today.", benefits: ["Design guidance", "Clear budgets", "Minimal disruption"] },
  { icon: ChefHat, title: "Kitchen Remodeling", desc: "Cabinets, countertops, layouts and lighting built for everyday cooking and gathering.", benefits: ["Custom layouts", "Quality materials", "Increased home value"] },
  { icon: Bath, title: "Bathroom Remodeling", desc: "Showers, tile, vanities and accessible upgrades crafted to last.", benefits: ["Waterproof construction", "Modern fixtures", "Accessibility options"] },
  { icon: Sofa, title: "Interior Renovations", desc: "Walls, trim, drywall, open floor plans and finish carpentry done right.", benefits: ["Clean job sites", "Precise finish work", "Fresh, modern spaces"] },
  { icon: Hammer, title: "Exterior Improvements", desc: "Siding, decks, porches, windows and doors that boost curb appeal.", benefits: ["Weather-ready materials", "Better efficiency", "Curb appeal"] },
  { icon: Layers, title: "Flooring Installation", desc: "Hardwood, LVP, tile and more, installed level and built to perform.", benefits: ["Subfloor prep", "Wide material selection", "Long-lasting finish"] },
  { icon: PaintRoller, title: "Painting Services", desc: "Interior and exterior painting with careful prep and crisp lines.", benefits: ["Thorough prep", "Premium paints", "Tidy cleanup"] },
  { icon: Wrench, title: "Property Repairs", desc: "Fast, reliable repairs for homes, rentals and commercial properties.", benefits: ["Responsive service", "Honest assessments", "Lasting fixes"] },
  { icon: Store, title: "Commercial Improvements", desc: "Tenant finish-outs, office upgrades and storefront renovations.", benefits: ["After-hours options", "Code compliance", "Business-friendly scheduling"] },
  { icon: ClipboardList, title: "Construction Management", desc: "Owner-side oversight of budgets, schedules, trades and quality.", benefits: ["Cost control", "Transparent reporting", "Risk reduction"] },
  { icon: Lightbulb, title: "Custom Project Solutions", desc: "Have something unique in mind? We welcome all types of contracting requests.", benefits: ["Any size project", "Creative problem solving", "Tailored approach"] },
];

export type Project = { title: string; category: "Residential" | "Commercial" | "Remodeling" | "Renovation"; location: string; image: string; before?: string; summary: string };

export const PROJECTS: Project[] = [
  { title: "Modern Kitchen Transformation", category: "Remodeling", location: "Fayetteville, AR", image: kitchen, before: kitchenBefore, summary: "Full gut remodel with shaker cabinets, quartz island and new lighting." },
  { title: "Spa-Style Primary Bathroom", category: "Remodeling", location: "Rogers, AR", image: bathroom, before: bathroomBefore, summary: "Walk-in glass shower, freestanding tub and heated tile floors." },
  { title: "Craftsman Exterior & Deck", category: "Residential", location: "Bentonville, AR", image: exterior, summary: "New siding, paint, covered porch and an elevated composite deck." },
  { title: "Open-Concept Living Renovation", category: "Renovation", location: "Springdale, AR", image: interior, summary: "Removed walls, installed LVP flooring and refreshed all finishes." },
  { title: "Downtown Office Storefront", category: "Commercial", location: "Fayetteville, AR", image: commercial, summary: "Storefront glazing, interior finish-out and ADA-compliant entry." },
  { title: "New Custom Home Framing", category: "Residential", location: "Farmington, AR", image: hero, summary: "Construction management for a custom timber-framed residence." },
];

export const TESTIMONIALS = [
  { name: "Sarah M.", place: "Fayetteville", text: "White River remodeled our kitchen and the result is stunning. They communicated every step and finished right on schedule." },
  { name: "David R.", place: "Rogers", text: "Honest, professional and great attention to detail. You can tell they take real pride in their work. Highly recommend." },
  { name: "Maria G.", place: "Springdale", text: "They handled our office renovation around our business hours. Clean job site, fair pricing, and excellent quality." },
];
