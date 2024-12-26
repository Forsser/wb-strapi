import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutCard extends Struct.ComponentSchema {
  collectionName: 'components_about_about_cards';
  info: {
    displayName: 'about-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'main-title'>;
  };
}

export interface ExampleExampleCard extends Struct.ComponentSchema {
  collectionName: 'components_example_example_cards';
  info: {
    displayName: 'example-card';
  };
  attributes: {
    exampleName: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface HeaderContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_header_contact_infos';
  info: {
    description: '';
    displayName: 'contact-Info';
  };
  attributes: {
    email: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'webstudio@gmail.com'>;
    phone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+380 000 000 000'>;
  };
}

export interface HeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_logos';
  info: {
    description: '';
    displayName: 'logo';
  };
  attributes: {
    logoImg: Schema.Attribute.Media<'images' | 'files'>;
    seoText: Schema.Attribute.String;
  };
}

export interface HeaderNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_header_navigation_links';
  info: {
    description: '';
    displayName: 'navigation-link';
  };
  attributes: {
    linkName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface HeroHeroTitle extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_titles';
  info: {
    description: '';
    displayName: 'hero-title';
  };
  attributes: {
    seoText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Subtitle'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Hero  Title'>;
  };
}

export interface ProblemProblemCard extends Struct.ComponentSchema {
  collectionName: 'components_problem_problem_cards';
  info: {
    displayName: 'problem-card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProblemProblemTitle extends Struct.ComponentSchema {
  collectionName: 'components_problem_problem_titles';
  info: {
    displayName: 'problem-title';
  };
  attributes: {
    secondTitle: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionQuestion extends Struct.ComponentSchema {
  collectionName: 'components_question_questions';
  info: {
    description: '';
    displayName: 'question';
  };
  attributes: {
    options: Schema.Attribute.Component<'question.question-options', true>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionQuestionOptions extends Struct.ComponentSchema {
  collectionName: 'components_question_question_options';
  info: {
    description: '';
    displayName: 'question-options';
  };
  attributes: {
    option: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ReviewReviewImg extends Struct.ComponentSchema {
  collectionName: 'components_review_review_imgs';
  info: {
    displayName: 'review-img';
  };
  attributes: {
    img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface ReviewReviewTitle extends Struct.ComponentSchema {
  collectionName: 'components_review_review_titles';
  info: {
    displayName: 'review-title';
  };
  attributes: {
    mainTitle: Schema.Attribute.String & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SpecializationSpecializationCard
  extends Struct.ComponentSchema {
  collectionName: 'components_specialization_specialization_cards';
  info: {
    displayName: 'specialization-card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'card title'>;
  };
}

export interface StepsSteps extends Struct.ComponentSchema {
  collectionName: 'components_steps_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-card': AboutAboutCard;
      'example.example-card': ExampleExampleCard;
      'header.contact-info': HeaderContactInfo;
      'header.logo': HeaderLogo;
      'header.navigation-link': HeaderNavigationLink;
      'hero.hero-title': HeroHeroTitle;
      'problem.problem-card': ProblemProblemCard;
      'problem.problem-title': ProblemProblemTitle;
      'question.question': QuestionQuestion;
      'question.question-options': QuestionQuestionOptions;
      'review.review-img': ReviewReviewImg;
      'review.review-title': ReviewReviewTitle;
      'specialization.specialization-card': SpecializationSpecializationCard;
      'steps.steps': StepsSteps;
    }
  }
}
