import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_home_banners';
  info: {
    displayName: 'Home Banner';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    features: Schema.Attribute.Text;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    phone_1: Schema.Attribute.String;
    phone_2: Schema.Attribute.String;
    sub_images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeEquipment extends Struct.ComponentSchema {
  collectionName: 'components_home_home_equipments';
  info: {
    displayName: 'Home Equipment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    machines: Schema.Attribute.Component<'home.machine', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_home_processes';
  info: {
    displayName: 'Home Process';
  };
  attributes: {
    steps: Schema.Attribute.Component<'home.steps', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeStory extends Struct.ComponentSchema {
  collectionName: 'components_home_home_stories';
  info: {
    displayName: 'Home Story';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeWelcome extends Struct.ComponentSchema {
  collectionName: 'components_home_home_welcomes';
  info: {
    displayName: 'Home Welcome';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_home_home_why_chooses';
  info: {
    displayName: 'Home Why Choose';
  };
  attributes: {
    commitment_title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'home.why-choose-feature', true>;
    stats: Schema.Attribute.Component<'home.why-choose-stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeMachine extends Struct.ComponentSchema {
  collectionName: 'components_home_machines';
  info: {
    displayName: 'Machine';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface HomeSteps extends Struct.ComponentSchema {
  collectionName: 'components_home_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseFeature extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_features';
  info: {
    displayName: 'WhyChooseFeature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseStat extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_stats';
  info: {
    displayName: 'WhyChooseStat';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.home-banner': HomeHomeBanner;
      'home.home-equipment': HomeHomeEquipment;
      'home.home-process': HomeHomeProcess;
      'home.home-story': HomeHomeStory;
      'home.home-welcome': HomeHomeWelcome;
      'home.home-why-choose': HomeHomeWhyChoose;
      'home.machine': HomeMachine;
      'home.steps': HomeSteps;
      'home.why-choose-feature': HomeWhyChooseFeature;
      'home.why-choose-stat': HomeWhyChooseStat;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
