import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCategory extends Struct.ComponentSchema {
  collectionName: 'components_components_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    category: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::generic-custom-fields.category'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.category': ComponentsCategory;
    }
  }
}
