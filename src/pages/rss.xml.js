import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
        return rss({
                title: 'Astro Learner | Blog',
                description: 'My journey learnign Astro',
                site: context.site,
                items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
                customData: `<languaage>en-us</language>`
        });
}
