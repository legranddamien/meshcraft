const supportedLocales = ["en", "de", "es", "fr", "ja", "pt"];

const translations = {
    en: {
        metaTitle: "MeshCraft - Mesh gradients made easy",
        metaDescription:
            "MeshCraft is an iPhone and iPad app for creating mesh gradients, wallpapers, backgrounds, and abstract visuals.",
        skip: "Skip to content",
        language: { label: "Language" },
        aria: {
            primaryNav: "Primary navigation",
            home: "MeshCraft home",
            sections: "Site sections",
            primaryLinks: "Primary links",
            screenshots: "MeshCraft app screenshots",
            dashboardFrame: "iPhone 17 Max frame showing MeshCraft dashboard screenshot",
            editorFrame: "iPhone 17 Max frame showing MeshCraft editor screenshot",
            examples: "MeshCraft gradient examples",
            technologies: "Apple technologies used by MeshCraft",
            footerNav: "Footer navigation",
        },
        alt: {
            dashboard: "MeshCraft dashboard with saved gradients.",
            editor: "MeshCraft editor with draggable gradient points.",
            mesh1: "MeshCraft example gradient 1",
            mesh2: "MeshCraft example gradient 2",
            mesh3: "MeshCraft example gradient 3",
            mesh4: "MeshCraft example gradient 4",
            mesh5: "MeshCraft example gradient 5",
            mesh6: "MeshCraft example gradient 6",
            mesh7: "MeshCraft example gradient 7",
            mesh8: "MeshCraft example gradient 8",
            mesh9: "MeshCraft example gradient 9",
        },
        nav: {
            features: "Features",
            technology: "Technology",
            support: "Support",
            privacy: "Privacy",
            privacyPolicy: "Privacy Policy",
        },
        hero: {
            eyebrow: "iOS 26+ · iPhone · iPad",
            appStore: "Download on the App Store",
            subtitle:
                "Create polished mesh gradients, wallpapers, backgrounds, and abstract visuals on iPhone and iPad.",
        },
        features: {
            eyebrow: "Built for color work",
            title: "A focused studio for expressive gradients.",
            direct: {
                title: "Direct mesh editing",
                body: "Shape the image by moving control points instead of fighting sliders.",
            },
            exports: {
                title: "Device-sized exports",
                body: "Create wallpapers sized for the physical iPhone or iPad display.",
            },
            harmonies: {
                title: "Color harmonies",
                body: "Explore balanced palettes, replace colors, and tune the whole composition.",
            },
            appleIntelligence: {
                title: "Apple Intelligence",
                body: "Use palette suggestions to start faster when a blank canvas feels too quiet.",
            },
            overlays: {
                title: "Overlays and filters",
                body: "Add texture, grain, scanlines, glitches, vignette, and geometric overlays.",
            },
            portrait: {
                title: "Portrait depth",
                body: "Blend depth-effect photos with gradients for layered wallpaper artwork.",
            },
            undo: {
                title: "Undo friendly",
                body: "Experiment freely with undo and redo while the design takes shape.",
            },
            library: {
                title: "Saved library",
                body: "Keep creations close, filter by size, reopen them, and export when ready.",
            },
            shortcuts: {
                title: "Shortcuts automation",
                body: "Fetch saved gradients from Shortcuts and build wallpaper routines around them.",
            },
        },
        examples: {
            eyebrow: "Examples",
            title: "Made for the screen you carry.",
        },
        technology: {
            eyebrow: "Apple platform native",
            title: "Modern iOS technology, no web service required.",
            body: "MeshCraft is built as a native Apple app with local-first creative data and iCloud sync for the user's own account.",
            liquidGlass: "Modern iOS 26 interface styling for controls and editing surfaces.",
            swiftData: "Local model persistence for saved meshes and editor state.",
            cloudKit: "Private account sync across the user's Apple devices.",
            metal: "GPU-backed overlays, filters, and export rendering.",
            meshGradient: "Native gradient rendering tuned for fluid color fields.",
            appleIntelligence: "Palette generation to help users find fresh color directions.",
            appIntents: "Shortcuts actions for retrieving saved and random meshes.",
            swiftUI: "Adaptive iPhone and iPad screens with contextual discovery tips.",
        },
        support: {
            eyebrow: "Support",
            title: "Help for MeshCraft.",
            requirements: {
                title: "Requirements",
                body: "MeshCraft requires iOS 26 or later. It is available for iPhone and iPad, and some interface details may adapt to the device size.",
            },
            icloud: {
                title: "iCloud sync",
                body: "MeshCraft supports iCloud. To sync saved creations across devices, sign in to an iCloud account on each device and keep iCloud enabled in Settings.",
            },
            creating: {
                title: "Creating a gradient",
                body: "Start with a device, square, or custom size. Drag mesh points to shape the gradient, adjust colors, apply overlays or filters, then save or export the result.",
            },
            photos: {
                title: "Exporting to Photos",
                body: "If exporting fails, check Photos permissions in iOS Settings and confirm there is enough storage available on the device.",
            },
            shortcuts: {
                title: "Shortcuts",
                body: "MeshCraft exposes App Intents to Shortcuts so automations can retrieve a selected, latest, or random saved mesh image.",
            },
            missing: {
                title: "Missing creations",
                body: "If saved meshes do not appear after installing on a new device, confirm the same iCloud account is signed in and give iCloud time to finish syncing.",
            },
            palettes: {
                title: "Apple Intelligence palettes",
                body: "Palette suggestions depend on Apple Intelligence availability for the device, region, and language. The editor still works without them.",
            },
            crashes: {
                title: "Crashes or glitches",
                body: "Keep MeshCraft and iOS updated. Crash diagnostics may be sent through Sentry to help fix stability problems without identifying the user.",
            },
        },
        privacy: {
            eyebrow: "Privacy Policy",
            title: "MeshCraft keeps creative data with the user.",
            updated: "Last updated May 15, 2026.",
            overview: {
                title: "Overview",
                body: "MeshCraft is a native iPhone and iPad app for creating mesh gradients and wallpapers. The developer, Damien Legrand, does not operate an app backend for storing user-created MeshCraft content.",
            },
            content: {
                title: "User-created content",
                body: "Gradients, saved meshes, editor settings, and exported images are kept on the user's device. When iCloud is available and enabled, MeshCraft can sync app data through the user's private iCloud account. The developer does not keep a separate copy of that data on a developer-run server.",
            },
            icloud: {
                title: "iCloud",
                body: "iCloud sync is provided by Apple. Users can manage iCloud account settings, iCloud storage, and device sync behavior in iOS Settings. Deleting MeshCraft data from the app or device may remove the corresponding synced app data according to Apple's iCloud behavior.",
            },
            crash: {
                title: "Crash diagnostics",
                body: "MeshCraft uses Sentry only to collect crash reports, performance data, and technical diagnostic information needed to improve app stability. These diagnostics are not used for advertising, tracking, or user profiling, and they are not intentionally linked to a user's identity.",
            },
            tracking: {
                title: "No advertising tracking",
                body: "MeshCraft does not use third-party advertising SDKs and does not sell user data. MeshCraft does not track users across other companies' apps or websites.",
            },
            website: {
                title: "Website note",
                body: "This GitHub Pages site is a static public website. It may load fonts and icons from external CDNs selected for presentation, but the MeshCraft app privacy practices described here are separate from ordinary website hosting request logs handled by GitHub or CDN providers.",
            },
            changes: {
                title: "Changes",
                body: "This policy may be updated when MeshCraft changes how it stores data or uses diagnostics. The updated policy will be published on this page.",
            },
        },
        footer: { top: "Top" },
    },
    de: {
        metaTitle: "MeshCraft - Mesh gradients made easy",
        metaDescription:
            "MeshCraft ist eine App für iPhone und iPad zum Erstellen von Mesh-Gradients, Wallpapern, Hintergründen und abstrakten Visuals.",
        skip: "Zum Inhalt springen",
        language: { label: "Sprache" },
        aria: {
            primaryNav: "Hauptnavigation",
            home: "MeshCraft Startseite",
            sections: "Seitenbereiche",
            primaryLinks: "Wichtige Links",
            screenshots: "Screenshots der MeshCraft App",
            dashboardFrame: "iPhone 17 Max Rahmen mit MeshCraft Dashboard-Screenshot",
            editorFrame: "iPhone 17 Max Rahmen mit MeshCraft Editor-Screenshot",
            examples: "MeshCraft Gradient-Beispiele",
            technologies: "Von MeshCraft verwendete Apple Technologien",
            footerNav: "Footer-Navigation",
        },
        alt: {
            dashboard: "MeshCraft Dashboard mit gespeicherten Gradients.",
            editor: "MeshCraft Editor mit verschiebbaren Gradient-Punkten.",
            mesh1: "MeshCraft Gradient-Beispiel 1",
            mesh2: "MeshCraft Gradient-Beispiel 2",
            mesh3: "MeshCraft Gradient-Beispiel 3",
            mesh4: "MeshCraft Gradient-Beispiel 4",
            mesh5: "MeshCraft Gradient-Beispiel 5",
            mesh6: "MeshCraft Gradient-Beispiel 6",
            mesh7: "MeshCraft Gradient-Beispiel 7",
            mesh8: "MeshCraft Gradient-Beispiel 8",
            mesh9: "MeshCraft Gradient-Beispiel 9",
        },
        nav: {
            features: "Funktionen",
            technology: "Technologie",
            support: "Support",
            privacy: "Datenschutz",
            privacyPolicy: "Datenschutz",
        },
        hero: {
            eyebrow: "iOS 26+ · iPhone · iPad",
            appStore: "Im App Store laden",
            subtitle:
                "Erstelle hochwertige Mesh-Gradients, Wallpaper, Hintergründe und abstrakte Visuals auf iPhone und iPad.",
        },
        features: {
            eyebrow: "Gebaut für Farbarbeit",
            title: "Ein fokussiertes Studio für ausdrucksstarke Gradients.",
            direct: {
                title: "Direktes Mesh-Editing",
                body: "Forme das Bild, indem du Kontrollpunkte bewegst, statt dich durch Regler zu kämpfen.",
            },
            exports: {
                title: "Exporte in Gerätegröße",
                body: "Erstelle Wallpaper in der Größe des physischen iPhone- oder iPad-Displays.",
            },
            harmonies: {
                title: "Farbharmonien",
                body: "Entdecke ausgewogene Paletten, ersetze Farben und stimme die ganze Komposition ab.",
            },
            appleIntelligence: {
                title: "Apple Intelligence",
                body: "Nutze Palettenvorschläge, um schneller zu starten, wenn die leere Leinwand zu still wirkt.",
            },
            overlays: {
                title: "Overlays und Filter",
                body: "Füge Textur, Körnung, Scanlines, Glitches, Vignette und geometrische Overlays hinzu.",
            },
            portrait: {
                title: "Porträttiefe",
                body: "Kombiniere Fotos mit Tiefeneffekt und Gradients zu mehrschichtigen Wallpaper-Motiven.",
            },
            undo: {
                title: "Rückgängig-freundlich",
                body: "Experimentiere frei mit Rückgängig und Wiederholen, während das Design entsteht.",
            },
            library: {
                title: "Gespeicherte Bibliothek",
                body: "Behalte Kreationen in Reichweite, filtere nach Größe, öffne sie erneut und exportiere sie.",
            },
            shortcuts: {
                title: "Kurzbefehle-Automation",
                body: "Rufe gespeicherte Gradients über Kurzbefehle ab und baue Wallpaper-Routinen damit.",
            },
        },
        examples: {
            eyebrow: "Beispiele",
            title: "Gemacht für den Bildschirm, den du bei dir trägst.",
        },
        technology: {
            eyebrow: "Nativ auf Apple Plattformen",
            title: "Moderne iOS-Technologie, kein Webservice nötig.",
            body: "MeshCraft ist als native Apple App mit lokal gespeicherten kreativen Daten und iCloud-Sync für den eigenen Account gebaut.",
            liquidGlass: "Modernes iOS 26 Interface-Styling für Bedienelemente und Editorflächen.",
            swiftData: "Lokale Modell-Persistenz für gespeicherte Meshes und Editorzustand.",
            cloudKit: "Private Account-Synchronisierung zwischen den Apple Geräten des Nutzers.",
            metal: "GPU-gestützte Overlays, Filter und Export-Renderings.",
            meshGradient: "Native Gradient-Darstellung, abgestimmt auf fließende Farbfelder.",
            appleIntelligence: "Palettengenerierung für frische Farbrichtungen.",
            appIntents: "Kurzbefehle-Aktionen zum Abrufen gespeicherter und zufälliger Meshes.",
            swiftUI: "Adaptive iPhone- und iPad-Oberflächen mit kontextuellen Entdeckungstipps.",
        },
        support: {
            eyebrow: "Support",
            title: "Hilfe für MeshCraft.",
            requirements: {
                title: "Voraussetzungen",
                body: "MeshCraft erfordert iOS 26 oder neuer. Die App ist für iPhone und iPad verfügbar; einige Oberflächendetails passen sich der Gerätegröße an.",
            },
            icloud: {
                title: "iCloud-Sync",
                body: "MeshCraft unterstützt iCloud. Um gespeicherte Kreationen zwischen Geräten zu synchronisieren, melde dich auf jedem Gerät bei iCloud an und lasse iCloud in den Einstellungen aktiviert.",
            },
            creating: {
                title: "Gradient erstellen",
                body: "Starte mit einer Gerätegröße, einem Quadrat oder einer eigenen Größe. Verschiebe Mesh-Punkte, passe Farben an, nutze Overlays oder Filter und speichere oder exportiere das Ergebnis.",
            },
            photos: {
                title: "Export in Fotos",
                body: "Wenn der Export fehlschlägt, prüfe die Fotos-Berechtigungen in den iOS Einstellungen und ob genug Speicher auf dem Gerät verfügbar ist.",
            },
            shortcuts: {
                title: "Kurzbefehle",
                body: "MeshCraft stellt App Intents für Kurzbefehle bereit, damit Automationen ein ausgewähltes, aktuelles oder zufälliges gespeichertes Mesh-Bild abrufen können.",
            },
            missing: {
                title: "Fehlende Kreationen",
                body: "Wenn gespeicherte Meshes auf einem neuen Gerät nicht erscheinen, prüfe, ob derselbe iCloud Account angemeldet ist, und gib iCloud Zeit zum Synchronisieren.",
            },
            palettes: {
                title: "Apple Intelligence Paletten",
                body: "Palettenvorschläge hängen von der Verfügbarkeit von Apple Intelligence für Gerät, Region und Sprache ab. Der Editor funktioniert auch ohne sie.",
            },
            crashes: {
                title: "Abstürze oder Fehler",
                body: "Halte MeshCraft und iOS aktuell. Absturzdiagnosen können über Sentry gesendet werden, um Stabilitätsprobleme zu beheben, ohne den Nutzer zu identifizieren.",
            },
        },
        privacy: {
            eyebrow: "Datenschutz",
            title: "MeshCraft lässt kreative Daten beim Nutzer.",
            updated: "Zuletzt aktualisiert am 15. Mai 2026.",
            overview: {
                title: "Überblick",
                body: "MeshCraft ist eine native iPhone- und iPad-App zum Erstellen von Mesh-Gradients und Wallpapern. Der Entwickler Damien Legrand betreibt kein App-Backend zum Speichern nutzergenerierter MeshCraft-Inhalte.",
            },
            content: {
                title: "Nutzergenerierte Inhalte",
                body: "Gradients, gespeicherte Meshes, Editor-Einstellungen und exportierte Bilder bleiben auf dem Gerät des Nutzers. Wenn iCloud verfügbar und aktiviert ist, kann MeshCraft App-Daten über den privaten iCloud Account des Nutzers synchronisieren. Der Entwickler speichert keine separate Kopie dieser Daten auf einem eigenen Server.",
            },
            icloud: {
                title: "iCloud",
                body: "Der iCloud-Sync wird von Apple bereitgestellt. Nutzer können iCloud Account-Einstellungen, iCloud-Speicher und Synchronisierung in den iOS Einstellungen verwalten. Das Löschen von MeshCraft-Daten aus der App oder vom Gerät kann die entsprechenden synchronisierten App-Daten gemäß Apples iCloud-Verhalten entfernen.",
            },
            crash: {
                title: "Absturzdiagnosen",
                body: "MeshCraft verwendet Sentry nur zum Sammeln von Absturzberichten, Leistungsdaten und technischen Diagnosen, die zur Verbesserung der Stabilität nötig sind. Diese Diagnosen werden nicht für Werbung, Tracking oder Profiling verwendet und nicht absichtlich mit der Identität eines Nutzers verknüpft.",
            },
            tracking: {
                title: "Kein Werbe-Tracking",
                body: "MeshCraft verwendet keine Werbe-SDKs von Drittanbietern und verkauft keine Nutzerdaten. MeshCraft verfolgt Nutzer nicht über Apps oder Websites anderer Unternehmen hinweg.",
            },
            website: {
                title: "Hinweis zur Website",
                body: "Diese GitHub Pages Website ist eine statische öffentliche Website. Sie kann Fonts und Icons von externen CDNs laden, die für die Darstellung ausgewählt wurden. Die hier beschriebenen Datenschutzpraktiken der MeshCraft App sind getrennt von normalen Website-Hosting-Logs, die von GitHub oder CDN-Anbietern verarbeitet werden.",
            },
            changes: {
                title: "Änderungen",
                body: "Diese Richtlinie kann aktualisiert werden, wenn MeshCraft ändert, wie Daten gespeichert oder Diagnosen genutzt werden. Die aktualisierte Richtlinie wird auf dieser Seite veröffentlicht.",
            },
        },
        footer: { top: "Nach oben" },
    },
    es: {
        metaTitle: "MeshCraft - Crea tus degradados",
        metaDescription:
            "MeshCraft es una app para iPhone y iPad para crear degradados de malla, fondos de pantalla, fondos y visuales abstractos.",
        skip: "Saltar al contenido",
        language: { label: "Idioma" },
        aria: {
            primaryNav: "Navegación principal",
            home: "Inicio de MeshCraft",
            sections: "Secciones del sitio",
            primaryLinks: "Enlaces principales",
            screenshots: "Capturas de la app MeshCraft",
            dashboardFrame: "Marco de iPhone 17 Max con captura del panel de MeshCraft",
            editorFrame: "Marco de iPhone 17 Max con captura del editor de MeshCraft",
            examples: "Ejemplos de degradados de MeshCraft",
            technologies: "Tecnologías de Apple usadas por MeshCraft",
            footerNav: "Navegación del pie",
        },
        alt: {
            dashboard: "Panel de MeshCraft con degradados guardados.",
            editor: "Editor de MeshCraft con puntos de degradado arrastrables.",
            mesh1: "Ejemplo de degradado de MeshCraft 1",
            mesh2: "Ejemplo de degradado de MeshCraft 2",
            mesh3: "Ejemplo de degradado de MeshCraft 3",
            mesh4: "Ejemplo de degradado de MeshCraft 4",
            mesh5: "Ejemplo de degradado de MeshCraft 5",
            mesh6: "Ejemplo de degradado de MeshCraft 6",
            mesh7: "Ejemplo de degradado de MeshCraft 7",
            mesh8: "Ejemplo de degradado de MeshCraft 8",
            mesh9: "Ejemplo de degradado de MeshCraft 9",
        },
        nav: {
            features: "Funciones",
            technology: "Tecnología",
            support: "Soporte",
            privacy: "Privacidad",
            privacyPolicy: "Privacidad",
        },
        hero: {
            eyebrow: "iOS 26+ · iPhone · iPad",
            appStore: "Descargar en App Store",
            subtitle:
                "Crea degradados de malla, fondos de pantalla, fondos y visuales abstractos pulidos en iPhone y iPad.",
        },
        features: {
            eyebrow: "Creado para trabajar con color",
            title: "Un estudio centrado en degradados expresivos.",
            direct: {
                title: "Edición directa de malla",
                body: "Da forma a la imagen moviendo puntos de control en lugar de pelear con deslizadores.",
            },
            exports: {
                title: "Exportaciones para el dispositivo",
                body: "Crea fondos de pantalla con el tamaño de la pantalla física del iPhone o iPad.",
            },
            harmonies: {
                title: "Armonías cromáticas",
                body: "Explora paletas equilibradas, reemplaza colores y ajusta toda la composición.",
            },
            appleIntelligence: {
                title: "Apple Intelligence",
                body: "Usa sugerencias de paletas para empezar más rápido cuando el lienzo en blanco pesa demasiado.",
            },
            overlays: {
                title: "Superposiciones y filtros",
                body: "Añade textura, grano, líneas de escaneo, glitches, viñeta y superposiciones geométricas.",
            },
            portrait: {
                title: "Profundidad de retrato",
                body: "Combina fotos con efecto de profundidad y degradados para fondos con capas.",
            },
            undo: {
                title: "Deshacer sin miedo",
                body: "Experimenta libremente con deshacer y rehacer mientras el diseño toma forma.",
            },
            library: {
                title: "Biblioteca guardada",
                body: "Ten tus creaciones cerca, filtra por tamaño, vuelve a abrirlas y exporta cuando quieras.",
            },
            shortcuts: {
                title: "Automatización con Atajos",
                body: "Obtén degradados guardados desde Atajos y crea rutinas de fondos de pantalla.",
            },
        },
        examples: {
            eyebrow: "Ejemplos",
            title: "Hecho para la pantalla que llevas contigo.",
        },
        technology: {
            eyebrow: "Nativo de Apple",
            title: "Tecnología iOS moderna, sin servicio web.",
            body: "MeshCraft está creada como una app nativa de Apple con datos creativos locales y sincronización con iCloud para la cuenta del usuario.",
            liquidGlass: "Estilo de interfaz moderno de iOS 26 para controles y superficies de edición.",
            swiftData: "Persistencia local de modelos para mallas guardadas y estado del editor.",
            cloudKit: "Sincronización privada entre los dispositivos Apple del usuario.",
            metal: "Superposiciones, filtros y exportación renderizados con GPU.",
            meshGradient: "Renderizado nativo de degradados ajustado para campos de color fluidos.",
            appleIntelligence: "Generación de paletas para encontrar nuevas direcciones de color.",
            appIntents: "Acciones de Atajos para recuperar mallas guardadas y aleatorias.",
            swiftUI: "Pantallas adaptativas para iPhone y iPad con consejos contextuales.",
        },
        support: {
            eyebrow: "Soporte",
            title: "Ayuda para MeshCraft.",
            requirements: {
                title: "Requisitos",
                body: "MeshCraft requiere iOS 26 o posterior. Está disponible para iPhone y iPad, y algunos detalles de la interfaz pueden adaptarse al tamaño del dispositivo.",
            },
            icloud: {
                title: "Sincronización con iCloud",
                body: "MeshCraft admite iCloud. Para sincronizar creaciones entre dispositivos, inicia sesión en una cuenta de iCloud en cada dispositivo y mantén iCloud activado en Ajustes.",
            },
            creating: {
                title: "Crear un degradado",
                body: "Empieza con un tamaño de dispositivo, cuadrado o personalizado. Arrastra puntos de la malla, ajusta colores, aplica superposiciones o filtros y guarda o exporta el resultado.",
            },
            photos: {
                title: "Exportar a Fotos",
                body: "Si la exportación falla, revisa los permisos de Fotos en Ajustes de iOS y confirma que hay suficiente almacenamiento disponible.",
            },
            shortcuts: {
                title: "Atajos",
                body: "MeshCraft expone App Intents a Atajos para que las automatizaciones puedan obtener una imagen de malla guardada seleccionada, reciente o aleatoria.",
            },
            missing: {
                title: "Creaciones ausentes",
                body: "Si las mallas guardadas no aparecen en un dispositivo nuevo, confirma que usas la misma cuenta de iCloud y da tiempo a iCloud para sincronizar.",
            },
            palettes: {
                title: "Paletas de Apple Intelligence",
                body: "Las sugerencias de paletas dependen de la disponibilidad de Apple Intelligence para el dispositivo, la región y el idioma. El editor funciona igualmente sin ellas.",
            },
            crashes: {
                title: "Cierres o fallos",
                body: "Mantén MeshCraft e iOS actualizados. Los diagnósticos de fallos pueden enviarse mediante Sentry para ayudar a corregir problemas de estabilidad sin identificar al usuario.",
            },
        },
        privacy: {
            eyebrow: "Política de privacidad",
            title: "MeshCraft mantiene los datos creativos con el usuario.",
            updated: "Última actualización: 15 de mayo de 2026.",
            overview: {
                title: "Resumen",
                body: "MeshCraft es una app nativa para iPhone y iPad que permite crear degradados de malla y fondos de pantalla. El desarrollador, Damien Legrand, no opera un backend para almacenar contenido de MeshCraft creado por usuarios.",
            },
            content: {
                title: "Contenido creado por el usuario",
                body: "Los degradados, mallas guardadas, ajustes del editor e imágenes exportadas se conservan en el dispositivo del usuario. Cuando iCloud está disponible y activado, MeshCraft puede sincronizar datos de la app mediante la cuenta privada de iCloud del usuario. El desarrollador no conserva una copia separada de esos datos en un servidor propio.",
            },
            icloud: {
                title: "iCloud",
                body: "La sincronización con iCloud la proporciona Apple. Los usuarios pueden gestionar la cuenta de iCloud, el almacenamiento de iCloud y la sincronización del dispositivo en Ajustes de iOS. Eliminar datos de MeshCraft desde la app o el dispositivo puede eliminar los datos sincronizados correspondientes según el comportamiento de iCloud de Apple.",
            },
            crash: {
                title: "Diagnósticos de fallos",
                body: "MeshCraft usa Sentry solo para recopilar informes de fallos, datos de rendimiento e información técnica necesaria para mejorar la estabilidad. Estos diagnósticos no se usan para publicidad, seguimiento ni creación de perfiles, y no se vinculan intencionadamente a la identidad del usuario.",
            },
            tracking: {
                title: "Sin seguimiento publicitario",
                body: "MeshCraft no usa SDKs publicitarios de terceros y no vende datos de usuarios. MeshCraft no rastrea a los usuarios en apps o sitios web de otras empresas.",
            },
            website: {
                title: "Nota sobre el sitio web",
                body: "Este sitio de GitHub Pages es una web pública estática. Puede cargar fuentes e iconos desde CDNs externos elegidos para la presentación, pero las prácticas de privacidad de la app MeshCraft descritas aquí son independientes de los registros normales de alojamiento gestionados por GitHub o proveedores CDN.",
            },
            changes: {
                title: "Cambios",
                body: "Esta política puede actualizarse cuando MeshCraft cambie la forma en que almacena datos o usa diagnósticos. La política actualizada se publicará en esta página.",
            },
        },
        footer: { top: "Arriba" },
    },
    fr: {
        metaTitle: "MeshCraft - Créez vos dégradés",
        metaDescription:
            "MeshCraft est une app pour iPhone et iPad qui permet de créer des dégradés mesh, des fonds d’écran, des arrière-plans et des visuels abstraits.",
        skip: "Aller au contenu",
        language: { label: "Langue" },
        aria: {
            primaryNav: "Navigation principale",
            home: "Accueil MeshCraft",
            sections: "Sections du site",
            primaryLinks: "Liens principaux",
            screenshots: "Captures d’écran de l’app MeshCraft",
            dashboardFrame: "Cadre iPhone 17 Max affichant la capture du tableau de bord MeshCraft",
            editorFrame: "Cadre iPhone 17 Max affichant la capture de l’éditeur MeshCraft",
            examples: "Exemples de dégradés MeshCraft",
            technologies: "Technologies Apple utilisées par MeshCraft",
            footerNav: "Navigation du pied de page",
        },
        alt: {
            dashboard: "Tableau de bord MeshCraft avec des dégradés enregistrés.",
            editor: "Éditeur MeshCraft avec des points de dégradé déplaçables.",
            mesh1: "Exemple de dégradé MeshCraft 1",
            mesh2: "Exemple de dégradé MeshCraft 2",
            mesh3: "Exemple de dégradé MeshCraft 3",
            mesh4: "Exemple de dégradé MeshCraft 4",
            mesh5: "Exemple de dégradé MeshCraft 5",
            mesh6: "Exemple de dégradé MeshCraft 6",
            mesh7: "Exemple de dégradé MeshCraft 7",
            mesh8: "Exemple de dégradé MeshCraft 8",
            mesh9: "Exemple de dégradé MeshCraft 9",
        },
        nav: {
            features: "Fonctions",
            technology: "Technologie",
            support: "Support",
            privacy: "Confidentialité",
            privacyPolicy: "Confidentialité",
        },
        hero: {
            eyebrow: "iOS 26+ · iPhone · iPad",
            appStore: "Télécharger sur l’App Store",
            subtitle:
                "Créez des dégradés mesh, des fonds d’écran, des arrière-plans et des visuels abstraits soignés sur iPhone et iPad.",
        },
        features: {
            eyebrow: "Pensé pour la couleur",
            title: "Un studio concentré pour des dégradés expressifs.",
            direct: {
                title: "Édition directe du maillage",
                body: "Façonnez l’image en déplaçant les points de contrôle plutôt qu’en multipliant les réglages.",
            },
            exports: {
                title: "Exports à la taille de l’appareil",
                body: "Créez des fonds d’écran adaptés à la taille physique de l’écran de l’iPhone ou de l’iPad.",
            },
            harmonies: {
                title: "Harmonies colorées",
                body: "Explorez des palettes équilibrées, remplacez les couleurs et ajustez toute la composition.",
            },
            appleIntelligence: {
                title: "Apple Intelligence",
                body: "Utilisez les suggestions de palettes pour démarrer plus vite quand la toile blanche semble trop silencieuse.",
            },
            overlays: {
                title: "Superpositions et filtres",
                body: "Ajoutez texture, grain, scanlines, glitches, vignette et superpositions géométriques.",
            },
            portrait: {
                title: "Profondeur portrait",
                body: "Mêlez photos avec effet de profondeur et dégradés pour des fonds d’écran en couches.",
            },
            undo: {
                title: "Annulation fluide",
                body: "Expérimentez librement avec annuler et rétablir pendant que le design prend forme.",
            },
            library: {
                title: "Bibliothèque enregistrée",
                body: "Gardez vos créations à portée de main, filtrez par taille, rouvrez-les et exportez-les.",
            },
            shortcuts: {
                title: "Automatisation Raccourcis",
                body: "Récupérez des dégradés enregistrés depuis Raccourcis et créez des routines de fonds d’écran.",
            },
        },
        examples: {
            eyebrow: "Exemples",
            title: "Pensé pour l’écran que vous emportez partout.",
        },
        technology: {
            eyebrow: "Natif sur les plateformes Apple",
            title: "Technologie iOS moderne, sans service web.",
            body: "MeshCraft est une app Apple native avec des données créatives locales et une synchronisation iCloud liée au compte de l’utilisateur.",
            liquidGlass: "Style d’interface moderne iOS 26 pour les contrôles et les surfaces d’édition.",
            swiftData: "Persistance locale des modèles pour les meshes enregistrés et l’état de l’éditeur.",
            cloudKit: "Synchronisation privée entre les appareils Apple de l’utilisateur.",
            metal: "Superpositions, filtres et exports rendus avec le GPU.",
            meshGradient: "Rendu natif de dégradés optimisé pour des champs de couleur fluides.",
            appleIntelligence: "Génération de palettes pour trouver de nouvelles directions colorées.",
            appIntents: "Actions Raccourcis pour récupérer des meshes enregistrés ou aléatoires.",
            swiftUI: "Écrans adaptatifs iPhone et iPad avec conseils contextuels.",
        },
        support: {
            eyebrow: "Support",
            title: "Aide pour MeshCraft.",
            requirements: {
                title: "Configuration requise",
                body: "MeshCraft nécessite iOS 26 ou une version ultérieure. L’app est disponible sur iPhone et iPad, et certains détails d’interface peuvent s’adapter à la taille de l’appareil.",
            },
            icloud: {
                title: "Synchronisation iCloud",
                body: "MeshCraft prend en charge iCloud. Pour synchroniser vos créations entre appareils, connectez-vous au même compte iCloud sur chaque appareil et gardez iCloud activé dans Réglages.",
            },
            creating: {
                title: "Créer un dégradé",
                body: "Partez d’une taille d’appareil, carrée ou personnalisée. Déplacez les points du maillage, ajustez les couleurs, appliquez des superpositions ou filtres, puis enregistrez ou exportez le résultat.",
            },
            photos: {
                title: "Exporter dans Photos",
                body: "Si l’export échoue, vérifiez les autorisations Photos dans les réglages iOS et assurez-vous que l’appareil dispose de suffisamment d’espace.",
            },
            shortcuts: {
                title: "Raccourcis",
                body: "MeshCraft expose des App Intents à Raccourcis afin que les automatisations puissent récupérer une image mesh sélectionnée, récente ou aléatoire.",
            },
            missing: {
                title: "Créations manquantes",
                body: "Si les meshes enregistrés n’apparaissent pas sur un nouvel appareil, vérifiez que le même compte iCloud est connecté et laissez le temps à iCloud de synchroniser.",
            },
            palettes: {
                title: "Palettes Apple Intelligence",
                body: "Les suggestions de palettes dépendent de la disponibilité d’Apple Intelligence selon l’appareil, la région et la langue. L’éditeur fonctionne aussi sans elles.",
            },
            crashes: {
                title: "Plantages ou anomalies",
                body: "Gardez MeshCraft et iOS à jour. Des diagnostics de plantage peuvent être envoyés via Sentry pour corriger les problèmes de stabilité sans identifier l’utilisateur.",
            },
        },
        privacy: {
            eyebrow: "Politique de confidentialité",
            title: "MeshCraft garde les données créatives auprès de l’utilisateur.",
            updated: "Dernière mise à jour : 15 mai 2026.",
            overview: {
                title: "Aperçu",
                body: "MeshCraft est une app native pour iPhone et iPad permettant de créer des dégradés mesh et des fonds d’écran. Le développeur, Damien Legrand, n’exploite pas de backend pour stocker le contenu MeshCraft créé par les utilisateurs.",
            },
            content: {
                title: "Contenu créé par l’utilisateur",
                body: "Les dégradés, meshes enregistrés, réglages de l’éditeur et images exportées restent sur l’appareil de l’utilisateur. Quand iCloud est disponible et activé, MeshCraft peut synchroniser les données de l’app via le compte iCloud privé de l’utilisateur. Le développeur ne conserve pas de copie séparée de ces données sur un serveur qu’il exploite.",
            },
            icloud: {
                title: "iCloud",
                body: "La synchronisation iCloud est fournie par Apple. Les utilisateurs peuvent gérer les réglages du compte iCloud, le stockage iCloud et la synchronisation de l’appareil dans Réglages iOS. Supprimer des données MeshCraft depuis l’app ou l’appareil peut supprimer les données d’app synchronisées correspondantes selon le comportement iCloud d’Apple.",
            },
            crash: {
                title: "Diagnostics de plantage",
                body: "MeshCraft utilise Sentry uniquement pour collecter des rapports de plantage, des données de performance et des informations techniques nécessaires à l’amélioration de la stabilité. Ces diagnostics ne sont pas utilisés pour la publicité, le suivi ou le profilage, et ne sont pas volontairement liés à l’identité de l’utilisateur.",
            },
            tracking: {
                title: "Aucun suivi publicitaire",
                body: "MeshCraft n’utilise pas de SDK publicitaire tiers et ne vend pas les données utilisateur. MeshCraft ne suit pas les utilisateurs dans les apps ou sites web d’autres entreprises.",
            },
            website: {
                title: "Note sur le site web",
                body: "Ce site GitHub Pages est un site public statique. Il peut charger des polices et icônes depuis des CDN externes choisis pour la présentation, mais les pratiques de confidentialité de l’app MeshCraft décrites ici sont distinctes des journaux d’hébergement ordinaires traités par GitHub ou des fournisseurs CDN.",
            },
            changes: {
                title: "Modifications",
                body: "Cette politique peut être mise à jour si MeshCraft change sa manière de stocker les données ou d’utiliser les diagnostics. La politique mise à jour sera publiée sur cette page.",
            },
        },
        footer: { top: "Haut" },
    },
    ja: {
        metaTitle: "MeshCraft - Mesh gradients made easy",
        metaDescription:
            "MeshCraftは、iPhoneとiPadでメッシュグラデーション、壁紙、背景、抽象ビジュアルを作成できるアプリです。",
        skip: "本文へ移動",
        language: { label: "言語" },
        aria: {
            primaryNav: "メインナビゲーション",
            home: "MeshCraft ホーム",
            sections: "サイトセクション",
            primaryLinks: "主要リンク",
            screenshots: "MeshCraftアプリのスクリーンショット",
            dashboardFrame: "MeshCraftダッシュボードのスクリーンショットを表示するiPhone 17 Maxフレーム",
            editorFrame: "MeshCraftエディタのスクリーンショットを表示するiPhone 17 Maxフレーム",
            examples: "MeshCraftグラデーション例",
            technologies: "MeshCraftで使用しているAppleテクノロジー",
            footerNav: "フッターナビゲーション",
        },
        alt: {
            dashboard: "保存済みグラデーションを表示するMeshCraftダッシュボード。",
            editor: "ドラッグできるグラデーションポイントを備えたMeshCraftエディタ。",
            mesh1: "MeshCraftグラデーション例1",
            mesh2: "MeshCraftグラデーション例2",
            mesh3: "MeshCraftグラデーション例3",
            mesh4: "MeshCraftグラデーション例4",
            mesh5: "MeshCraftグラデーション例5",
            mesh6: "MeshCraftグラデーション例6",
            mesh7: "MeshCraftグラデーション例7",
            mesh8: "MeshCraftグラデーション例8",
            mesh9: "MeshCraftグラデーション例9",
        },
        nav: {
            features: "機能",
            technology: "テクノロジー",
            support: "サポート",
            privacy: "プライバシー",
            privacyPolicy: "プライバシーポリシー",
        },
        hero: {
            eyebrow: "iOS 26+ · iPhone · iPad",
            appStore: "App Storeでダウンロード",
            subtitle:
                "iPhoneとiPadで、洗練されたメッシュグラデーション、壁紙、背景、抽象ビジュアルを作成できます。",
        },
        features: {
            eyebrow: "色づくりのために設計",
            title: "表現豊かなグラデーションのための集中できるスタジオ。",
            direct: {
                title: "直接メッシュ編集",
                body: "スライダーに頼らず、コントロールポイントを動かして画像を形づくれます。",
            },
            exports: {
                title: "デバイスサイズ書き出し",
                body: "iPhoneやiPadの物理ディスプレイに合わせた壁紙を作成できます。",
            },
            harmonies: {
                title: "カラー調和",
                body: "バランスのよいパレットを探し、色を置き換え、全体の構成を調整できます。",
            },
            appleIntelligence: {
                title: "Apple Intelligence",
                body: "白紙から始めにくいときも、パレット提案で素早く方向性を見つけられます。",
            },
            overlays: {
                title: "オーバーレイとフィルタ",
                body: "質感、粒子、スキャンライン、グリッチ、ビネット、幾何学的オーバーレイを追加できます。",
            },
            portrait: {
                title: "ポートレート深度",
                body: "深度効果の写真とグラデーションを組み合わせ、奥行きのある壁紙を作れます。",
            },
            undo: {
                title: "安心して戻せる編集",
                body: "取り消しとやり直しを使いながら、自由に試行錯誤できます。",
            },
            library: {
                title: "保存ライブラリ",
                body: "作成したビジュアルを保存し、サイズで絞り込み、再編集して書き出せます。",
            },
            shortcuts: {
                title: "ショートカット自動化",
                body: "保存済みグラデーションをショートカットから取得し、壁紙ルーティンに組み込めます。",
            },
        },
        examples: {
            eyebrow: "例",
            title: "いつも持ち歩く画面のために。",
        },
        technology: {
            eyebrow: "Appleプラットフォームネイティブ",
            title: "Webサービス不要のモダンなiOSテクノロジー。",
            body: "MeshCraftは、ローカルファーストのクリエイティブデータとユーザー自身のiCloud同期を備えたネイティブAppleアプリです。",
            liquidGlass: "コントロールと編集画面に向けたモダンなiOS 26インターフェイス表現。",
            swiftData: "保存済みメッシュとエディタ状態のためのローカルモデル永続化。",
            cloudKit: "ユーザーのAppleデバイス間でのプライベートなアカウント同期。",
            metal: "GPUを使ったオーバーレイ、フィルタ、書き出しレンダリング。",
            meshGradient: "流れるような色面に合わせたネイティブグラデーションレンダリング。",
            appleIntelligence: "新しい色の方向性を見つけるためのパレット生成。",
            appIntents: "保存済みまたはランダムなメッシュを取得するショートカットアクション。",
            swiftUI: "iPhoneとiPadに適応する画面と文脈に応じた発見ヒント。",
        },
        support: {
            eyebrow: "サポート",
            title: "MeshCraftのヘルプ。",
            requirements: {
                title: "必要条件",
                body: "MeshCraftにはiOS 26以降が必要です。iPhoneとiPadで利用でき、画面サイズに応じて一部のインターフェイスが調整されます。",
            },
            icloud: {
                title: "iCloud同期",
                body: "MeshCraftはiCloudに対応しています。保存した作品をデバイス間で同期するには、各デバイスでiCloudアカウントにサインインし、設定でiCloudを有効にしてください。",
            },
            creating: {
                title: "グラデーションを作成する",
                body: "デバイス、正方形、またはカスタムサイズから始めます。メッシュポイントを動かし、色を調整し、オーバーレイやフィルタを適用して、保存または書き出します。",
            },
            photos: {
                title: "写真への書き出し",
                body: "書き出しに失敗する場合は、iOS設定で写真への権限を確認し、デバイスの空き容量が十分にあることを確認してください。",
            },
            shortcuts: {
                title: "ショートカット",
                body: "MeshCraftはApp Intentsをショートカットに公開し、選択済み、最新、またはランダムな保存済みメッシュ画像を自動化で取得できます。",
            },
            missing: {
                title: "作品が見つからない場合",
                body: "新しいデバイスで保存済みメッシュが表示されない場合は、同じiCloudアカウントでサインインしていることを確認し、iCloud同期が完了するまで待ってください。",
            },
            palettes: {
                title: "Apple Intelligenceパレット",
                body: "パレット提案は、デバイス、地域、言語でのApple Intelligenceの利用可否に依存します。利用できなくてもエディタは動作します。",
            },
            crashes: {
                title: "クラッシュや不具合",
                body: "MeshCraftとiOSを最新に保ってください。安定性の問題を修正するため、ユーザーを識別しない形でクラッシュ診断がSentry経由で送信される場合があります。",
            },
        },
        privacy: {
            eyebrow: "プライバシーポリシー",
            title: "MeshCraftは創作データをユーザーの手元に保ちます。",
            updated: "最終更新日: 2026年5月15日。",
            overview: {
                title: "概要",
                body: "MeshCraftは、iPhoneとiPadでメッシュグラデーションや壁紙を作成するネイティブアプリです。開発者Damien Legrandは、ユーザーが作成したMeshCraftコンテンツを保存するためのアプリ用バックエンドを運用していません。",
            },
            content: {
                title: "ユーザー作成コンテンツ",
                body: "グラデーション、保存済みメッシュ、エディタ設定、書き出した画像はユーザーのデバイスに保持されます。iCloudが利用可能で有効な場合、MeshCraftはユーザーのプライベートなiCloudアカウントを通じてアプリデータを同期できます。開発者はそのデータの別コピーを開発者運用サーバーに保存しません。",
            },
            icloud: {
                title: "iCloud",
                body: "iCloud同期はAppleによって提供されます。ユーザーはiOS設定でiCloudアカウント、iCloudストレージ、デバイス同期を管理できます。アプリやデバイスからMeshCraftデータを削除すると、AppleのiCloud動作に従って対応する同期済みアプリデータが削除される場合があります。",
            },
            crash: {
                title: "クラッシュ診断",
                body: "MeshCraftは、アプリの安定性向上に必要なクラッシュレポート、パフォーマンスデータ、技術的診断情報の収集にのみSentryを使用します。これらの診断は広告、追跡、プロファイリングには使用されず、ユーザーの身元と意図的に紐づけられることもありません。",
            },
            tracking: {
                title: "広告トラッキングなし",
                body: "MeshCraftは第三者広告SDKを使用せず、ユーザーデータを販売しません。MeshCraftは他社のアプリやWebサイトをまたいでユーザーを追跡しません。",
            },
            website: {
                title: "Webサイトについて",
                body: "このGitHub Pagesサイトは静的な公開Webサイトです。表示のために外部CDNからフォントやアイコンを読み込む場合がありますが、ここで説明するMeshCraftアプリのプライバシー慣行は、GitHubやCDNプロバイダが処理する通常のWebサイトホスティングログとは別のものです。",
            },
            changes: {
                title: "変更",
                body: "MeshCraftがデータの保存方法または診断の使用方法を変更した場合、このポリシーは更新されることがあります。更新されたポリシーはこのページで公開されます。",
            },
        },
        footer: { top: "トップ" },
    },
    pt: {
        metaTitle: "MeshCraft - Mesh gradients made easy",
        metaDescription:
            "MeshCraft é uma app para iPhone e iPad que permite criar gradientes mesh, wallpapers, fundos e visuais abstractos.",
        skip: "Saltar para o conteúdo",
        language: { label: "Idioma" },
        aria: {
            primaryNav: "Navegação principal",
            home: "Início do MeshCraft",
            sections: "Secções do site",
            primaryLinks: "Ligações principais",
            screenshots: "Capturas da app MeshCraft",
            dashboardFrame: "Moldura iPhone 17 Max com captura do painel do MeshCraft",
            editorFrame: "Moldura iPhone 17 Max com captura do editor do MeshCraft",
            examples: "Exemplos de gradientes MeshCraft",
            technologies: "Tecnologias Apple usadas pelo MeshCraft",
            footerNav: "Navegação do rodapé",
        },
        alt: {
            dashboard: "Painel do MeshCraft com gradientes guardados.",
            editor: "Editor do MeshCraft com pontos de gradiente arrastáveis.",
            mesh1: "Exemplo de gradiente MeshCraft 1",
            mesh2: "Exemplo de gradiente MeshCraft 2",
            mesh3: "Exemplo de gradiente MeshCraft 3",
            mesh4: "Exemplo de gradiente MeshCraft 4",
            mesh5: "Exemplo de gradiente MeshCraft 5",
            mesh6: "Exemplo de gradiente MeshCraft 6",
            mesh7: "Exemplo de gradiente MeshCraft 7",
            mesh8: "Exemplo de gradiente MeshCraft 8",
            mesh9: "Exemplo de gradiente MeshCraft 9",
        },
        nav: {
            features: "Funcionalidades",
            technology: "Tecnologia",
            support: "Suporte",
            privacy: "Privacidade",
            privacyPolicy: "Privacidade",
        },
        hero: {
            eyebrow: "iOS 26+ · iPhone · iPad",
            appStore: "Descarregar na App Store",
            subtitle:
                "Crie gradientes mesh, wallpapers, fundos e visuais abstractos polidos no iPhone e iPad.",
        },
        features: {
            eyebrow: "Criado para trabalhar cor",
            title: "Um estúdio focado para gradientes expressivos.",
            direct: {
                title: "Edição directa da malha",
                body: "Molde a imagem movendo pontos de controlo em vez de lutar com barras de ajuste.",
            },
            exports: {
                title: "Exportações à medida do dispositivo",
                body: "Crie wallpapers no tamanho físico do ecrã do iPhone ou iPad.",
            },
            harmonies: {
                title: "Harmonias cromáticas",
                body: "Explore paletas equilibradas, substitua cores e ajuste toda a composição.",
            },
            appleIntelligence: {
                title: "Apple Intelligence",
                body: "Use sugestões de paletas para começar mais depressa quando a tela em branco parece demasiado silenciosa.",
            },
            overlays: {
                title: "Sobreposições e filtros",
                body: "Adicione textura, grão, scanlines, glitches, vinheta e sobreposições geométricas.",
            },
            portrait: {
                title: "Profundidade de retrato",
                body: "Combine fotos com efeito de profundidade e gradientes para wallpapers com camadas.",
            },
            undo: {
                title: "Anular sem receio",
                body: "Experimente livremente com anular e refazer enquanto o design ganha forma.",
            },
            library: {
                title: "Biblioteca guardada",
                body: "Mantenha criações por perto, filtre por tamanho, reabra-as e exporte quando quiser.",
            },
            shortcuts: {
                title: "Automatização com Atalhos",
                body: "Obtenha gradientes guardados através de Atalhos e crie rotinas de wallpapers.",
            },
        },
        examples: {
            eyebrow: "Exemplos",
            title: "Feito para o ecrã que leva consigo.",
        },
        technology: {
            eyebrow: "Nativo nas plataformas Apple",
            title: "Tecnologia iOS moderna, sem serviço web.",
            body: "MeshCraft é uma app Apple nativa com dados criativos locais e sincronização iCloud para a conta do utilizador.",
            liquidGlass: "Estilo de interface moderno do iOS 26 para controlos e superfícies de edição.",
            swiftData: "Persistência local de modelos para meshes guardados e estado do editor.",
            cloudKit: "Sincronização privada entre os dispositivos Apple do utilizador.",
            metal: "Sobreposições, filtros e exportação renderizados com GPU.",
            meshGradient: "Renderização nativa de gradientes afinada para campos de cor fluidos.",
            appleIntelligence: "Geração de paletas para encontrar novas direcções de cor.",
            appIntents: "Acções de Atalhos para obter meshes guardados e aleatórios.",
            swiftUI: "Ecrãs adaptativos para iPhone e iPad com dicas contextuais.",
        },
        support: {
            eyebrow: "Suporte",
            title: "Ajuda para MeshCraft.",
            requirements: {
                title: "Requisitos",
                body: "MeshCraft requer iOS 26 ou posterior. Está disponível para iPhone e iPad, e alguns detalhes da interface podem adaptar-se ao tamanho do dispositivo.",
            },
            icloud: {
                title: "Sincronização iCloud",
                body: "MeshCraft suporta iCloud. Para sincronizar criações entre dispositivos, inicie sessão numa conta iCloud em cada dispositivo e mantenha iCloud activo nas Definições.",
            },
            creating: {
                title: "Criar um gradiente",
                body: "Comece com um tamanho de dispositivo, quadrado ou personalizado. Arraste pontos da malha, ajuste cores, aplique sobreposições ou filtros e depois guarde ou exporte o resultado.",
            },
            photos: {
                title: "Exportar para Fotografias",
                body: "Se a exportação falhar, verifique as permissões de Fotografias nas Definições do iOS e confirme que existe espaço suficiente no dispositivo.",
            },
            shortcuts: {
                title: "Atalhos",
                body: "MeshCraft expõe App Intents aos Atalhos para que automatizações possam obter uma imagem mesh guardada seleccionada, recente ou aleatória.",
            },
            missing: {
                title: "Criações em falta",
                body: "Se os meshes guardados não aparecerem num novo dispositivo, confirme que a mesma conta iCloud está iniciada e dê tempo ao iCloud para sincronizar.",
            },
            palettes: {
                title: "Paletas Apple Intelligence",
                body: "As sugestões de paletas dependem da disponibilidade de Apple Intelligence para o dispositivo, região e idioma. O editor continua a funcionar sem elas.",
            },
            crashes: {
                title: "Falhas ou problemas",
                body: "Mantenha MeshCraft e iOS actualizados. Diagnósticos de falhas podem ser enviados através da Sentry para ajudar a corrigir problemas de estabilidade sem identificar o utilizador.",
            },
        },
        privacy: {
            eyebrow: "Política de Privacidade",
            title: "MeshCraft mantém os dados criativos com o utilizador.",
            updated: "Última actualização: 15 de maio de 2026.",
            overview: {
                title: "Resumo",
                body: "MeshCraft é uma app nativa para iPhone e iPad que permite criar gradientes mesh e wallpapers. O programador, Damien Legrand, não opera um backend da app para guardar conteúdo MeshCraft criado por utilizadores.",
            },
            content: {
                title: "Conteúdo criado pelo utilizador",
                body: "Gradientes, meshes guardados, definições do editor e imagens exportadas ficam no dispositivo do utilizador. Quando iCloud está disponível e activo, MeshCraft pode sincronizar dados da app através da conta iCloud privada do utilizador. O programador não guarda uma cópia separada desses dados num servidor próprio.",
            },
            icloud: {
                title: "iCloud",
                body: "A sincronização iCloud é fornecida pela Apple. Os utilizadores podem gerir definições da conta iCloud, armazenamento iCloud e sincronização do dispositivo nas Definições do iOS. Apagar dados MeshCraft da app ou do dispositivo pode remover os dados sincronizados correspondentes segundo o comportamento iCloud da Apple.",
            },
            crash: {
                title: "Diagnósticos de falhas",
                body: "MeshCraft usa Sentry apenas para recolher relatórios de falhas, dados de desempenho e informação técnica necessária para melhorar a estabilidade da app. Estes diagnósticos não são usados para publicidade, rastreamento ou criação de perfis, e não são intencionalmente ligados à identidade do utilizador.",
            },
            tracking: {
                title: "Sem rastreamento publicitário",
                body: "MeshCraft não usa SDKs publicitários de terceiros e não vende dados de utilizadores. MeshCraft não rastreia utilizadores em apps ou sites de outras empresas.",
            },
            website: {
                title: "Nota sobre o site",
                body: "Este site GitHub Pages é um site público estático. Pode carregar fontes e ícones de CDNs externos escolhidos para apresentação, mas as práticas de privacidade da app MeshCraft descritas aqui são separadas dos registos normais de alojamento tratados pelo GitHub ou fornecedores CDN.",
            },
            changes: {
                title: "Alterações",
                body: "Esta política pode ser actualizada quando MeshCraft alterar a forma como guarda dados ou usa diagnósticos. A política actualizada será publicada nesta página.",
            },
        },
        footer: { top: "Topo" },
    },
};

function valueForKey(locale, key) {
    const segments = key.split(".");
    let current = translations[locale];

    for (const segment of segments) {
        current = current?.[segment];
    }

    if (typeof current === "string") {
        return current;
    }

    current = translations.en;
    for (const segment of segments) {
        current = current?.[segment];
    }

    return typeof current === "string" ? current : null;
}

function normalizeLocale(locale) {
    if (!locale) {
        return null;
    }

    const base = locale.toLowerCase().split("-")[0];
    return supportedLocales.includes(base) ? base : null;
}

function localeFromUrl() {
    return normalizeLocale(new URLSearchParams(window.location.search).get("lang"));
}

function localeFromBrowser() {
    const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const browserLocale of browserLocales) {
        const locale = normalizeLocale(browserLocale);
        if (locale) {
            return locale;
        }
    }

    return "en";
}

function storedLocale() {
    try {
        return normalizeLocale(window.localStorage.getItem("meshcraft.locale"));
    } catch {
        return null;
    }
}

function storeLocale(locale) {
    try {
        window.localStorage.setItem("meshcraft.locale", locale);
    } catch {
        // Language switching still works through the URL hash when storage is unavailable.
    }
}

function selectedLocale() {
    return localeFromUrl()
        ?? storedLocale()
        ?? localeFromBrowser();
}

function applyLocale(locale) {
    const selected = supportedLocales.includes(locale) ? locale : "en";
    const metaDescription = document.querySelector("meta[name='description']");
    const languageSelect = document.querySelector("#language-select");

    document.documentElement.lang = selected;
    document.title = valueForKey(selected, "metaTitle") ?? translations.en.metaTitle;

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            valueForKey(selected, "metaDescription") ?? translations.en.metaDescription,
        );
    }

    for (const element of document.querySelectorAll("[data-i18n]")) {
        const value = valueForKey(selected, element.dataset.i18n);
        if (value) {
            element.textContent = value;
        }
    }

    for (const element of document.querySelectorAll("[data-i18n-aria-label]")) {
        const value = valueForKey(selected, element.dataset.i18nAriaLabel);
        if (value) {
            element.setAttribute("aria-label", value);
        }
    }

    for (const element of document.querySelectorAll("[data-i18n-alt]")) {
        const value = valueForKey(selected, element.dataset.i18nAlt);
        if (value) {
            element.setAttribute("alt", value);
        }
    }

    if (languageSelect) {
        languageSelect.value = selected;
    }

    storeLocale(selected);
}

function configureLanguageSwitcher() {
    const languageSelect = document.querySelector("#language-select");
    if (!languageSelect) {
        return;
    }

    languageSelect.addEventListener("change", (event) => {
        const locale = event.target.value;
        const url = new URL(window.location.href);

        url.searchParams.set("lang", locale);
        applyLocale(locale);
        window.history.replaceState(null, "", url);
    });
}

applyLocale(selectedLocale());
configureLanguageSwitcher();
