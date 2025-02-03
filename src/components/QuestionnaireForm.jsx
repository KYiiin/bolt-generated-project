import React, { useState } from 'react';
import './QuestionnaireForm.css';
import ProgressBar from './ProgressBar';

const QuestionnaireForm = () => {
  const [formData, setFormData] = useState({
    nomPrenom: '',
    tel: '',
    experience: '',
    specialisation: '',
    siteWeb: '',
    lienSiteWeb: '',
    visibiliteEnLigne: '',
    outilsPromotion: [],
    rdvClients: '',
    priseRdvAutomatisée: '',
    newsletters: '',
    rappelsRdv: '',
    reseauxSociaux: [],
    aideReseauxSociaux: [],
    publicitesEnLigne: '',
    facturationAutomatisée: '',
    besoinsAdministratifs: [],
    objectifs: [],
    difficultes: [],
    prioriteService: '',
    autresAspects: '',
  });

  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 7;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    let currentValues = formData[name] || [];
    if (checked) {
      currentValues.push(value);
    } else {
      currentValues = currentValues.filter(item => item !== value);
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: currentValues,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulaire soumis ! Voir les données dans la console.');
  };

  const renderSection = (section) => {
    switch (section) {
      case 1:
        return (
          <section>
            <h2>Informations générales</h2>
            <p className="section-description">Pour mieux vous connaître et comprendre votre activité</p>
            <div className="form-group">
              <label htmlFor="nomPrenom">Nom et Prénom *</label>
              <input type="text" id="nomPrenom" name="nomPrenom" value={formData.nomPrenom} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Tel *</label>
              <input type="tel" id="tel" name="tel" value={formData.tel} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Depuis combien de temps exercez-vous comme coach sportif ?</label>
              <div className="radio-group">
                <label><input type="radio" name="experience" value="Moins d’un an" checked={formData.experience === 'Moins d’un an'} onChange={handleInputChange} /> Moins d’un an</label>
                <label><input type="radio" name="experience" value="1 à 3 ans" checked={formData.experience === '1 à 3 ans'} onChange={handleInputChange} /> 1 à 3 ans</label>
                <label><input type="radio" name="experience" value="3 à 5 ans" checked={formData.experience === '3 à 5 ans'} onChange={handleInputChange} /> 3 à 5 ans</label>
                <label><input type="radio" name="experience" value="Plus de 5 ans" checked={formData.experience === 'Plus de 5 ans'} onChange={handleInputChange} /> Plus de 5 ans</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="specialisation">Avez-vous une spécialisation ? (exemple : fitness, musculation, perte de poids, coaching en ligne, etc.)</label>
              <input type="text" id="specialisation" name="specialisation" value={formData.specialisation} onChange={handleInputChange} />
            </div>
          </section>
        );
      case 2:
        return (
          <section>
            <h2>Présence en ligne actuelle</h2>
            <p className="section-description">Évaluez votre empreinte digitale et vos outils de promotion en ligne.</p>
            <div className="form-group">
              <label>Avez-vous déjà un site web ?</label>
              <div className="radio-group">
                <label><input type="radio" name="siteWeb" value="Oui" onChange={handleInputChange} /> Oui</label>
                <label><input type="radio" name="siteWeb" value="Non" onChange={handleInputChange} /> Non</label>
              </div>
            </div>
            {formData.siteWeb === 'Oui' && (
              <div className="form-group">
                <label htmlFor="lienSiteWeb">Si oui, quel est le lien ?</label>
                <input type="url" id="lienSiteWeb" name="lienSiteWeb" value={formData.lienSiteWeb} onChange={handleInputChange} />
              </div>
            )}
            <div className="form-group">
              <label>Comment évaluez-vous votre visibilité en ligne actuellement ?</label>
              <div className="radio-group">
                <label><input type="radio" name="visibiliteEnLigne" value="Faible" onChange={handleInputChange} /> Faible</label>
                <label><input type="radio" name="visibiliteEnLigne" value="Moyenne" onChange={handleInputChange} /> Moyenne</label>
                <label><input type="radio" name="visibiliteEnLigne" value="Forte" onChange={handleInputChange} /> Forte</label>
              </div>
            </div>
            <div className="form-group">
              <label>Quels outils utilisez-vous déjà pour promouvoir votre activité ?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="outilsPromotion" value="Réseaux sociaux" onChange={handleCheckboxChange} /> Réseaux sociaux</label>
                <label><input type="checkbox" name="outilsPromotion" value="Publicité en ligne (Google Ads, Facebook Ads, etc.)" onChange={handleCheckboxChange} /> Publicité en ligne (Google Ads, Facebook Ads, etc.)</label>
                <label><input type="checkbox" name="outilsPromotion" value="Plateformes spécialisées" onChange={handleCheckboxChange} /> Plateformes spécialisées</label>
              </div>
            </div>
          </section>
        );
      case 3:
        return (
          <section>
            <h2>Gestion et automatisation</h2>
            <p className="section-description">Optimisez votre gestion administrative et gagnez du temps.</p>
            <div className="form-group">
              <label>Comment vos clients prennent-ils rendez-vous aujourd’hui ?</label>
              <div className="radio-group">
                <label><input type="radio" name="rdvClients" value="Par téléphone" onChange={handleInputChange} /> Par téléphone</label>
                <label><input type="radio" name="rdvClients" value="Par message (WhatsApp, Messenger, etc.)" onChange={handleInputChange} /> Par message (WhatsApp, Messenger, etc.)</label>
                <label><input type="radio" name="rdvClients" value="Agenda en ligne" onChange={handleInputChange} /> Agenda en ligne</label>
              </div>
            </div>
            <div className="form-group">
              <label>Souhaitez-vous intégrer un système de prise de rendez-vous automatisé ?</label>
              <div className="radio-group">
                <label><input type="radio" name="priseRdvAutomatisée" value="Oui" onChange={handleInputChange} /> Oui</label>
                <label><input type="radio" name="priseRdvAutomatisée" value="Non, cela ne m’intéresse pas pour le moment" onChange={handleInputChange} /> Non, cela ne m’intéresse pas pour le moment</label>
              </div>
            </div>
            <div className="form-group">
              <label>Envoyez-vous régulièrement des newsletters ou des campagnes e-mailing à vos clients ?</label>
              <div className="radio-group">
                <label><input type="radio" name="newsletters" value="Oui" onChange={handleInputChange} /> Oui</label>
                <label><input type="radio" name="newsletters" value="Non, mais je voudrais commencer" onChange={handleInputChange} /> Non, mais je voudrais commencer</label>
              </div>
            </div>
            <div className="form-group">
              <label>Utilisez-vous un système pour envoyer des rappels de rendez-vous à vos clients ?</label>
              <div className="radio-group">
                <label><input type="radio" name="rappelsRdv" value="Oui" onChange={handleInputChange} /> Oui</label>
                <label><input type="radio" name="rappelsRdv" value="Non, mais je suis intéressé(e)" onChange={handleInputChange} /> Non, mais je suis intéressé(e)</label>
              </div>
            </div>
          </section>
        );
      case 4:
        return (
          <section>
            <h2>Réseaux sociaux et marketing digital</h2>
            <p className="section-description">Boostez votre présence et吸引 de nouveaux clients grâce au digital.</p>
            <div className="form-group">
              <label>Quels réseaux sociaux utilisez-vous pour votre activité ?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="reseauxSociaux" value="Instagram" onChange={handleCheckboxChange} /> Instagram</label>
                <label><input type="checkbox" name="reseauxSociaux" value="Facebook" onChange={handleCheckboxChange} /> Facebook</label>
                <label><input type="checkbox" name="reseauxSociaux" value="TikTok" onChange={handleCheckboxChange} /> TikTok</label>
                <label><input type="checkbox" name="reseauxSociaux" value="YouTube" onChange={handleCheckboxChange} /> YouTube</label>
                <label><input type="checkbox" name="reseauxSociaux" value="Autre" onChange={handleCheckboxChange} /> Autre</label>
              </div>
            </div>
            <div className="form-group">
              <label>Avez-vous besoin d’aide pour la gestion de vos réseaux sociaux ?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="aideReseauxSociaux" value="Création de contenu (photos, vidéos, publications)" onChange={handleCheckboxChange} /> Création de contenu (photos, vidéos, publications)</label>
                <label><input type="checkbox" name="aideReseauxSociaux" value="Gestion des publications (programmation, stratégie)" onChange={handleCheckboxChange} /> Gestion des publications (programmation, stratégie)</label>
                <label><input type="checkbox" name="aideReseauxSociaux" value="Publicités ciblées pour attirer de nouveaux clients" onChange={handleCheckboxChange} /> Publicités ciblées pour attirer de nouveaux clients</label>
                <label><input type="checkbox" name="aideReseauxSociaux" value="Analyse des performances et recommandations" onChange={handleCheckboxChange} /> Analyse des performances et recommandations</label>
              </div>
            </div>
            <div className="form-group">
              <label>Investissez-vous actuellement dans des publicités en ligne ?</label>
              <div className="radio-group">
                <label><input type="radio" name="publicitesEnLigne" value="Oui, mais je veux optimiser mes résultats" onChange={handleInputChange} /> Oui, mais je veux optimiser mes résultats</label>
                <label><input type="radio" name="publicitesEnLigne" value="Non, mais je suis intéressé(e)" onChange={handleInputChange} /> Non, mais je suis intéressé(e)</label>
                <label><input type="radio" name="publicitesEnLigne" value="Non, cela ne m’intéresse pas" onChange={handleInputChange} /> Non, cela ne m’intéresse pas</label>
              </div>
            </div>
          </section>
        );
      case 5:
        return (
          <section>
            <h2>Systèmes de facturation et gestion administrative</h2>
            <p className="section-description">Simplifiez votre facturation et administration pour une gestion sereine.</p>
            <div className="form-group">
              <label>Utilisez-vous un système de facturation automatisé ?</label>
              <div className="radio-group">
                <label><input type="radio" name="facturationAutomatisée" value="Oui" onChange={handleInputChange} /> Oui</label>
                <label><input type="radio" name="facturationAutomatisée" value="Non, mais cela m’intéresse" onChange={handleInputChange} /> Non, mais cela m’intéresse</label>
                <label><input type="radio" name="facturationAutomatisée" value="Non, je préfère gérer manuellement" onChange={handleInputChange} /> Non, je préfère gérer manuellement</label>
              </div>
            </div>
            <div className="form-group">
              <label>Avez-vous des besoins spécifiques en termes de gestion administrative ?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="besoinsAdministratifs" value="Gestion des abonnements des clients" onChange={handleCheckboxChange} /> Gestion des abonnements des clients</label>
                <label><input type="checkbox" name="besoinsAdministratifs" value="Suivi des paiements" onChange={handleCheckboxChange} /> Suivi des paiements</label>
                <label><input type="checkbox" name="besoinsAdministratifs" value="Reporting (chiffre d’affaires, etc.)" onChange={handleCheckboxChange} /> Reporting (chiffre d’affaires, etc.)</label>
                <label><input type="checkbox" name="besoinsAdministratifs" value="Autre" onChange={handleCheckboxChange} /> Autre</label>
              </div>
            </div>
          </section>
        );
      case 6:
        return (
          <section>
            <h2>Objectifs et priorités</h2>
            <p className="section-description">Définissez vos objectifs pour mieux orienter notre collaboration.</p>
            <div className="form-group">
              <label>Quels sont vos principaux objectifs pour votre activité dans les 6 à 12 mois ?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="objectifs" value="Attirer de nouveaux clients" onChange={handleCheckboxChange} /> Attirer de nouveaux clients</label>
                <label><input type="checkbox" name="objectifs" value="Fidéliser votre clientèle actuelle" onChange={handleCheckboxChange} /> Fidéliser votre clientèle actuelle</label>
                <label><input type="checkbox" name="objectifs" value="Proposer de nouveaux services ou produits" onChange={handleCheckboxChange} /> Proposer de nouveaux services ou produits</label>
                <label><input type="checkbox" name="objectifs" value="Automatiser certaines tâches pour gagner du temps" onChange={handleCheckboxChange} /> Automatiser certaines tâches pour gagner du temps</label>
                <label><input type="checkbox" name="objectifs" value="Autres" onChange={handleCheckboxChange} /> Autres :</label>
              </div>
            </div>
            <div className="form-group">
              <label>Quelles sont vos plus grandes difficultés aujourd’hui ?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="difficultes" value="Gérer le flux de rendez-vous" onChange={handleCheckboxChange} /> Gérer le flux de rendez-vous</label>
                <label><input type="checkbox" name="difficultes" value="Augmenter la visibilité du salon" onChange={handleCheckboxChange} /> Augmenter la visibilité du salon</label>
                <label><input type="checkbox" name="difficultes" value="Fidéliser les clients" onChange={handleCheckboxChange} /> Fidéliser les clients</label>
                <label><input type="checkbox" name="difficultes" value="Autres" onChange={handleCheckboxChange} /> Autres :</label>
              </div>
            </div>
            <div className="form-group">
              <label>Si vous deviez prioriser un seul service parmi ceux que nous proposons, lequel choisiriez-vous ?</label>
              <div className="radio-group">
                <label><input type="radio" name="prioriteService" value="Création ou optimisation de site web" onChange={handleInputChange} /> Création ou optimisation de site web</label>
                <label><input type="radio" name="prioriteService" value="Gestion des réseaux sociaux" onChange={handleInputChange} /> Gestion des réseaux sociaux</label>
                <label><input type="radio" name="prioriteService" value="Automatisation (prise de RDV, rappels, facturation)" onChange={handleInputChange} /> Automatisation (prise de RDV, rappels, facturation)</label>
                <label><input type="radio" name="prioriteService" value="Campagnes publicitaires ciblées" onChange={handleInputChange} /> Campagnes publicitaires ciblées</label>
                <label><input type="radio" name="prioriteService" value="Autres" onChange={handleInputChange} /> Autres :</label>
              </div>
            </div>
          </section>
        );
      case 7:
        return (
          <section>
            <h2>Informations supplémentaires</h2>
            <p className="section-description">Des informations additionnelles pour personnaliser notre approche.</p>
            <div className="form-group">
              <label htmlFor="autresAspects">Y a-t-il d’autres aspects de votre activité que vous aimeriez améliorer ou développer ?</label>
              <textarea id="autresAspects" name="autresAspects" value={formData.autresAspects} onChange={handleInputChange} rows="4"></textarea>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  const progress = ((currentSection - 1) / (totalSections - 1)) * 100;

  return (
    <form onSubmit={handleSubmit} className="questionnaire-form">
      <div className="progress-header">
        <ProgressBar progress={progress} currentSection={currentSection} totalSections={totalSections} />
      </div>
      {renderSection(currentSection)}

      <div className="buttons">
        {currentSection > 1 && (
          <button type="button" className="previous-button" onClick={() => setCurrentSection(currentSection - 1)}>
            Précédent
          </button>
        )}
        {currentSection < totalSections ? (
          <button type="button" className="next-button" onClick={() => setCurrentSection(currentSection + 1)}>
            Suivant
          </button>
        ) : (
          <button type="submit" className="submit-button">
            Envoyer le questionnaire
          </button>
        )}
      </div>
    </form>
  );
};

export default QuestionnaireForm;
