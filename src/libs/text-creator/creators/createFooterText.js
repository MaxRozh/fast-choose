
import Language from '../../languages/Language.js';

const createLoginText = () => {

    return {
        company: Language.getTextById('footer.company'),
        about: Language.getTextById('footer.about'),
        jobs: Language.getTextById('footer.jobs'),
        commun: Language.getTextById('footer.commun'),
        fCompanies: Language.getTextById('footer.f-companies'),
        developers: Language.getTextById('footer.developers'),
        brands: Language.getTextById('footer.brands'),
        investors: Language.getTextById('footer.investors'),
        uLinks: Language.getTextById('footer.u-links'),
        help: Language.getTextById('footer.help'),
        legal: Language.getTextById('footer.legal'),
        privacy: Language.getTextById('footer.privacy'),
        cookies: Language.getTextById('footer.cookies'),
        aAds: Language.getTextById('footer.a-ads')
    };
};

export default createLoginText;
