// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Header → Navigation*
 */
export interface HeaderDocumentDataNavigationItem {
  /**
   * Nav Title field in *Header → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].nav_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_title: prismic.KeyTextField;

  /**
   * Nav Link field in *Header → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].nav_link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nav_link: prismic.KeyTextField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Button Text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Navigation field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | SkillsSlice
  | WorksSlice
  | AboutSlice
  | ServicesSlice
  | HeroSlice
  | ExperienceSlice
  | ContactSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = HeaderDocument | PageDocument;

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Title field in *About → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *About → Items*
 */
export interface AboutSliceDefaultItem {
  /**
   * Property field in *About → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.items[].property
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  property: prismic.KeyTextField;

  /**
   * Value field in *About → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.items[].value
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  value: prismic.KeyTextField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  Simplify<AboutSliceDefaultItem>
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
  /**
   * Title field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Button Text field in *Contact → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * SVG Image field in *Contact → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.default.primary.svg_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  svg_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Contact → Items*
 */
export interface ContactSliceDefaultItem {
  /**
   * Info Title field in *Contact → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.items[].info_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  info_title: prismic.KeyTextField;

  /**
   * Info Value field in *Contact → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.items[].info_value
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  info_value: prismic.KeyTextField;

  /**
   * Info Icon field in *Contact → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.items[].info_icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  info_icon: prismic.SelectField<"phone" | "email" | "map">;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSliceDefaultPrimary>,
  Simplify<ContactSliceDefaultItem>
>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault;

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<
  "contact",
  ContactSliceVariation
>;

/**
 * Primary content in *Timeline → Default → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
  /**
   * Timeline Id field in *Timeline → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.default.primary.timeline_id
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  timeline_id: prismic.KeyTextField;

  /**
   * Title field in *Timeline → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Timeline → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *Timeline → Items*
 */
export interface ExperienceSliceDefaultItem {
  /**
   * Time Frame field in *Timeline → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].time_frame
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  time_frame: prismic.KeyTextField;

  /**
   * Program field in *Timeline → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].program
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  program: prismic.KeyTextField;

  /**
   * Institution field in *Timeline → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.items[].institution
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  institution: prismic.KeyTextField;
}

/**
 * Default variation for Timeline Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExperienceSliceDefaultPrimary>,
  Simplify<ExperienceSliceDefaultItem>
>;

/**
 * Slice variation for *Timeline*
 */
type ExperienceSliceVariation = ExperienceSliceDefault;

/**
 * Timeline Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<
  "experience",
  ExperienceSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Designation field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.designation
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  designation: prismic.KeyTextField;

  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Resume Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.resume_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  resume_link: prismic.LinkToMediaField;

  /**
   * Experience field in *Hero → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.experience
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  experience: prismic.NumberField;

  /**
   * Projects field in *Hero → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.projects
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  projects: prismic.NumberField;

  /**
   * Technologies field in *Hero → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.technologies
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  technologies: prismic.NumberField;

  /**
   * Commits field in *Hero → Default → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.commits
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  commits: prismic.NumberField;

  /**
   * Photo field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.photo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Social Icon field in *Hero → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].social_icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  social_icon: prismic.SelectField<
    "github" | "linkedin" | "facebook" | "instagram" | "youtube" | "twitter"
  >;

  /**
   * Social Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].social_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  social_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Rich Text field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: rich_text.default.primary.rich_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  rich_text: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Services → Items*
 */
export interface ServicesSliceDefaultItem {
  /**
   * title field in *Services → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Services → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ServicesSliceDefaultItem>
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Primary content in *Skills → Default → Primary*
 */
export interface SkillsSliceDefaultPrimary {
  /**
   * Title field in *Skills → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Description field in *Skills → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *Skills → Items*
 */
export interface SkillsSliceDefaultItem {
  /**
   * Label field in *Skills → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Skill field in *Skills → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: skills.items[].skill
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  skill: prismic.SelectField<
    | "nextjs"
    | "reactjs"
    | "cSharp"
    | "python"
    | "php"
    | "reactNative"
    | "django"
    | "html"
    | "css"
    | "javascript"
    | "java"
    | "kotlin"
    | "tailwindCss"
    | "nodejs"
    | "mongodb"
    | "typescript"
    | "git"
    | "flutter"
    | "sass"
    | "laravel"
    | "php"
    | "flutter"
  >;
}

/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SkillsSliceDefaultPrimary>,
  Simplify<SkillsSliceDefaultItem>
>;

/**
 * Slice variation for *Skills*
 */
type SkillsSliceVariation = SkillsSliceDefault;

/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: Skills
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillsSlice = prismic.SharedSlice<"skills", SkillsSliceVariation>;

/**
 * Primary content in *Works → Items*
 */
export interface WorksSliceDefaultItem {
  /**
   * Image field in *Works → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *Works → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Works → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Skills Used field in *Works → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].skills_used
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skills_used: prismic.KeyTextField;

  /**
   * Github Link field in *Works → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].github_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github_link: prismic.LinkField;

  /**
   * Live Site Link field in *Works → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].live_site_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  live_site_link: prismic.LinkField;

  /**
   * Category field in *Works → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: works.items[].category
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  category: prismic.SelectField<
    "Frontend" | "Backend" | "App Development" | "UI/UX Design" | "Fullstack"
  >;
}

/**
 * Default variation for Works Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<WorksSliceDefaultItem>
>;

/**
 * Slice variation for *Works*
 */
type WorksSliceVariation = WorksSliceDefault;

/**
 * Works Shared Slice
 *
 * - **API ID**: `works`
 * - **Description**: Works
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorksSlice = prismic.SharedSlice<"works", WorksSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataNavigationItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceDefaultItem,
      AboutSliceVariation,
      AboutSliceDefault,
      ContactSlice,
      ContactSliceDefaultPrimary,
      ContactSliceDefaultItem,
      ContactSliceVariation,
      ContactSliceDefault,
      ExperienceSlice,
      ExperienceSliceDefaultPrimary,
      ExperienceSliceDefaultItem,
      ExperienceSliceVariation,
      ExperienceSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultItem,
      ServicesSliceVariation,
      ServicesSliceDefault,
      SkillsSlice,
      SkillsSliceDefaultPrimary,
      SkillsSliceDefaultItem,
      SkillsSliceVariation,
      SkillsSliceDefault,
      WorksSlice,
      WorksSliceDefaultItem,
      WorksSliceVariation,
      WorksSliceDefault,
    };
  }
}
