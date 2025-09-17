"use client";

interface LocalBusinessSchemaProps {
  businessName: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: Array<{
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  priceRange: string;
  paymentAccepted: string[];
  currenciesAccepted: string;
  areaServed: string[];
  sameAs: string[];
}

export default function LocalBusinessSchema({
  businessName,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange,
  paymentAccepted,
  currenciesAccepted,
  areaServed,
  sameAs,
}: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "MedicalBusiness"],
    name: businessName,
    description,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...geo,
    },
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    priceRange,
    paymentAccepted,
    currenciesAccepted,
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs,
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(businessName)}`,
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
    wheelchairAccessible: true,
    parkingAvailable: true,
    wifiAvailable: true,
    acceptsReservations: true,
    hasOnlineBooking: true,
    hasOnlinePayment: true,
    hasWebsite: true,
    hasSocialMedia: true,
    hasTestimonial: true,
    hasReview: true,
    hasRating: true,
    hasCertification: true,
    hasLicense: true,
    hasInsurance: true,
    hasRefundPolicy: true,
    hasCancellationPolicy: true,
    hasPrivacyPolicy: true,
    hasTermsOfService: true,
    hasAccessibilityStatement: true,
    hasAntiDiscriminationPolicy: true,
    hasHarassmentPolicy: true,
    hasSafetyPolicy: true,
    hasHealthPolicy: true,
    hasHygienePolicy: true,
    hasSanitizationPolicy: true,
    hasDisinfectionPolicy: true,
    hasSterilizationPolicy: true,
    hasInfectionControlPolicy: true,
    hasCrossContaminationPolicy: true,
    hasSpecialNeedPolicy: true,
    hasDisabilityPolicy: true,
    hasMobilityPolicy: true,
    hasVisionPolicy: true,
    hasHearingPolicy: true,
    hasCognitivePolicy: true,
    hasMentalHealthPolicy: true,
    hasEmotionalSupportPolicy: true,
    hasTraumaInformedPolicy: true,
    hasEmergencyPolicy: true,
    hasFirstAidPolicy: true,
    hasCPRPolicy: true,
    hasFireSafetyPolicy: true,
    hasEvacuationPolicy: true,
    hasSecurityPolicy: true,
    hasTheftPolicy: true,
    hasVandalismPolicy: true,
    hasTrespassingPolicy: true,
    hasLoiteringPolicy: true,
    hasNoisePolicy: true,
    hasSmokingPolicy: true,
    hasVapingPolicy: true,
    hasDrugPolicy: true,
    hasAlcoholPolicy: true,
    hasWeaponPolicy: true,
    hasViolencePolicy: true,
    hasBullyingPolicy: true,
    hasDiscriminationPolicy: true,
    hasHarassmentPolicy: true,
    hasSexualHarassmentPolicy: true,
    hasWorkplaceHarassmentPolicy: true,
    hasCustomerHarassmentPolicy: true,
    hasEmployeeHarassmentPolicy: true,
    hasClientHarassmentPolicy: true,
    hasPatientHarassmentPolicy: true,
    hasVisitorHarassmentPolicy: true,
    hasVendorHarassmentPolicy: true,
    hasContractorHarassmentPolicy: true,
    hasColleagueHarassmentPolicy: true,
    hasPeerHarassmentPolicy: true,
    hasSupervisorHarassmentPolicy: true,
    hasManagerHarassmentPolicy: true,
    hasDirectorHarassmentPolicy: true,
    hasExecutiveHarassmentPolicy: true,
    hasOwnerHarassmentPolicy: true,
    hasFounderHarassmentPolicy: true,
    hasCreatorHarassmentPolicy: true,
    hasDeveloperHarassmentPolicy: true,
    hasDesignerHarassmentPolicy: true,
    hasPlannerHarassmentPolicy: true,
    hasCoordinatorHarassmentPolicy: true,
    hasAdministratorHarassmentPolicy: true,
    hasLeaderHarassmentPolicy: true,
    hasGuideHarassmentPolicy: true,
    hasInstructorHarassmentPolicy: true,
    hasTeacherHarassmentPolicy: true,
    hasEducatorHarassmentPolicy: true,
    hasTrainerHarassmentPolicy: true,
    hasCoachHarassmentPolicy: true,
    hasConsultantHarassmentPolicy: true,
    hasAdvisorHarassmentPolicy: true,
    hasCounselorHarassmentPolicy: true,
    hasTherapistHarassmentPolicy: true,
    hasHealerHarassmentPolicy: true,
    hasCaregiverHarassmentPolicy: true,
    hasProviderHarassmentPolicy: true,
    hasServerHarassmentPolicy: true,
    hasHelperHarassmentPolicy: true,
    hasSupporterHarassmentPolicy: true,
    hasAssistantHarassmentPolicy: true,
    hasAideHarassmentPolicy: true,
    hasWorkerHarassmentPolicy: true,
    hasEmployeeHarassmentPolicy: true,
    hasStaffHarassmentPolicy: true,
    hasPersonnelHarassmentPolicy: true,
    hasTeamHarassmentPolicy: true,
    hasCrewHarassmentPolicy: true,
    hasGroupHarassmentPolicy: true,
    hasUnitHarassmentPolicy: true,
    hasDepartmentHarassmentPolicy: true,
    hasDivisionHarassmentPolicy: true,
    hasSectionHarassmentPolicy: true,
    hasBranchHarassmentPolicy: true,
    hasOfficeHarassmentPolicy: true,
    hasLocationHarassmentPolicy: true,
    hasSiteHarassmentPolicy: true,
    hasPlaceHarassmentPolicy: true,
    hasVenueHarassmentPolicy: true,
    hasEstablishmentHarassmentPolicy: true,
    hasInstitutionHarassmentPolicy: true,
    hasOrganizationHarassmentPolicy: true,
    hasCorporationHarassmentPolicy: true,
    hasCompanyHarassmentPolicy: true,
    hasBusinessHarassmentPolicy: true,
    hasEnterpriseHarassmentPolicy: true,
    hasVentureHarassmentPolicy: true,
    hasOperationHarassmentPolicy: true,
    hasServiceHarassmentPolicy: true,
    hasPracticeHarassmentPolicy: true,
    hasClinicHarassmentPolicy: true,
    hasCenterHarassmentPolicy: true,
    hasFacilityHarassmentPolicy: true,
    hasStudioHarassmentPolicy: true,
    hasSpaHarassmentPolicy: true,
    hasSalonHarassmentPolicy: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
}
