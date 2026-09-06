import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing-page.landing-page', ({ strapi }) => ({
  async find(ctx) {
    const previewSecret = process.env.STRAPI_PREVIEW_SECRET ?? 'local-preview-secret';
    const providedSecret = ctx.request.headers['x-preview-secret'];

    if (!previewSecret || providedSecret !== previewSecret) {
      ctx.query = {
        ...ctx.query,
        status: 'published',
      };
    }

    return super.find(ctx);
  },

  async findOne(ctx) {
    const previewSecret = process.env.STRAPI_PREVIEW_SECRET ?? 'local-preview-secret';
    const providedSecret = ctx.request.headers['x-preview-secret'];

    if (!previewSecret || providedSecret !== previewSecret) {
      ctx.query = {
        ...ctx.query,
        status: 'published',
      };
    }

    return super.findOne(ctx);
  },
}));
