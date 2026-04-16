export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navigation
    'nav.problem': 'El problema',
    'nav.howWorks': 'Cómo funciona',
    'nav.app': 'La app',
    'nav.requirements': 'Requisitos',
    'nav.setup': 'Configurar',
    'nav.beHost': 'Ser host',
    'nav.download': 'Descargar',

    // Hero section
    'hero.title': 'MCSync',
    'hero.subtitle': 'El servidor de Minecraft siempre disponible. Sin importar quién hostea.',
    'hero.description': 'MCSync es una app de escritorio para Windows que automatiza la rotación del host en servidores Minecraft entre amigos. Con un clic, comprime el mundo, lo sube a GitHub, lo descarga, descomprime y lanza el servidor.',
    'hero.download': 'Descargar',
    'hero.github': 'Ver en GitHub',
    'hero.meta': 'Windows · .NET 8 · Open Source · v0.2.0',

    // Problem section
    'problem.title': 'El problema',
    'problem.description': 'Cuando el amigo que hostea se desconecta, todos pierden acceso al mundo. El flujo manual de comprimir ZIP, enviar, descomprimir y volver a configurar el servidor es lento; MCSync lo automatiza de punta a punta.',
    'problem.withoutTitle': 'Sin MCSync',
    'problem.withTitle': 'Con MCSync',
    'problem.without.1': '— Detener servidor y buscar la carpeta del mundo',
    'problem.without.2': '— Comprimir todo en un ZIP',
    'problem.without.3': '— Enviar archivo manualmente',
    'problem.without.4': '— Descargar y descomprimir en otra PC',
    'problem.without.5': '— Reconfigurar server.jar y túnel',
    'problem.with.1': '✓ Presionar STOP HOST AND SYNC',
    'problem.with.2': '✓ Presionar START HOST en la otra PC',
    'problem.with.3': '✓ Seguir jugando en el mismo mundo',

    // How it works section
    'howWorks.title': 'Cómo funciona',
    'howWorks.stopTitle': 'Al dejar de hostear:',
    'howWorks.startTitle': 'Al querer hostear:',
    'howWorks.stop.1': 'Presionas STOP HOST AND SYNC',
    'howWorks.stop.2': 'El servidor se detiene limpiamente',
    'howWorks.stop.3': 'El mundo se comprime y sube a tu repo privado de GitHub',
    'howWorks.stop.4': 'Se libera el turno',
    'howWorks.start.1': 'Presionas START HOST',
    'howWorks.start.2': 'MCSync descarga el mundo más reciente desde GitHub',
    'howWorks.start.3': 'Lo descomprime y prepara el servidor',
    'howWorks.start.4': 'Inicia server.jar y el túnel de playit.gg',
    'howWorks.start.5': 'Obtienes el link para compartir con tus amigos',

    // App section
    'app.title': 'La app',
    'app.subtitle': 'Interfaz directa. Sin distracciones.',
    'app.dashboard': 'Dashboard principal con estado del servidor y botones de acción',
    'app.config': 'Los campos de configuración: GitHub Owner, Repo, Branch, Token, Server Jar path y Playit.gg URL',
    'app.sync': 'Dashboard mostrando el proceso de sincronización en curso, con mensajes de estado',

    // Requirements section
    'requirements.title': 'Requisitos',
    'requirements.subtitle': 'Configura esto una sola vez',
    'requirements.java': 'Java 21 o superior',
    'requirements.javaDesc': 'Debe estar instalado y agregado al PATH del sistema. Descárgalo desde adoptium.net o el JDK oficial de Oracle.',
    'requirements.playit': 'playit.gg',
    'requirements.playitDesc': 'Descarga e instala el .msi desde playit.gg/download/windows. La primera vez que lo abras deberás crear una cuenta, confirmar el agente y configurarlo para Minecraft Java Edition. Este proceso toma menos de 2 minutos. Al finalizar, playit.gg te entregará un link — guárdalo. Si lo pierdes, puedes recuperarlo ejecutando playit en una terminal.',
    'requirements.repo': 'Repositorio privado en GitHub',
    'requirements.repoDesc': 'Crea un repositorio nuevo (preferiblemente privado) en GitHub. Este repo almacenará el mundo y el estado de sincronización. No necesitas subir nada manualmente.',
    'requirements.token': 'Token de GitHub (Fine-grained)',
    'requirements.tokenDesc': 'Accede a github.com/settings/personal-access-tokens. Al crear el token: ponle cualquier nombre, en Repository Access selecciona Only select repositories y elige el repo que creaste. En permisos, selecciona Contents y cambia el acceso a Read and Write. Genera el token y cópialo inmediatamente — no podrás verlo de nuevo. Si lo pierdes en el futuro, puedes generar uno nuevo sin perder el mundo.',
    'requirements.jar': 'server.jar de Minecraft',
    'requirements.jarDesc': 'Descárgalo desde minecraft.net/en-us/download/server para la versión más reciente. Para versiones específicas usa mcversions.net.',

    // Setup section
    'setup.title': 'Configurar MCSync',
    'setup.subtitle': 'Solo la primera vez. Los demás usuarios comparten la misma configuración de GitHub.',
    'setup.field': 'Campo',
    'setup.example': 'Ejemplo',
    'setup.owner': 'GitHub Owner',
    'setup.repo': 'GitHub Repo',
    'setup.branch': 'GitHub Branch',
    'setup.token': 'GitHub Token',
    'setup.jar': 'Server Jar',
    'setup.playitUrl': 'Playit.gg URL',
    'setup.playitNote': 'El link que te entregó playit.gg',
    'setup.note': 'Si pierdes el token de GitHub, puedes generar uno nuevo. El mundo no se pierde y no necesitas crear un nuevo repositorio.',

    // Be host section
    'beHost.title': '¿Quieres ser host también?',
    'beHost.description': 'Los amigos que quieran tomar el rol de host solo necesitan preparar su entorno una vez. No necesitan crear un repositorio propio ni descargar el mundo manualmente: MCSync lo hace automáticamente al presionar START HOST.',
    'beHost.step1Title': 'Instalar Java',
    'beHost.step1': 'Instala Java 21+ y agrégalo al PATH del sistema.',
    'beHost.step2Title': 'Configurar playit.gg',
    'beHost.step2': 'Completa el flujo inicial de 2 minutos para Minecraft Java Edition.',
    'beHost.step3Title': 'Recibir datos GitHub',
    'beHost.step3': 'Usa owner, repo, branch y token del host original.',

    // Download section
    'download.title': 'Listo para jugar',
    'download.subtitle': 'Descarga MCSync y compártelo con tus amigos.',
    'download.meta': 'Open source · MIT License · Windows · Hecho con C# .NET 8',

    // Footer
    'footer.text': 'MCSync · github.com/fnandoth/MCSync · Open Source',

    // Language toggle
    'lang.english': 'English',
    'lang.spanish': 'Español',
  },
  en: {
    // Navigation
    'nav.problem': 'The Problem',
    'nav.howWorks': 'How It Works',
    'nav.app': 'The App',
    'nav.requirements': 'Requirements',
    'nav.setup': 'Setup',
    'nav.beHost': 'Be Host',
    'nav.download': 'Download',

    // Hero section
    'hero.title': 'MCSync',
    'hero.subtitle': 'Your Minecraft server always available. No matter who hosts.',
    'hero.description': 'MCSync is a desktop app for Windows that automates host rotation in Minecraft servers among friends. With one click, it compresses the world, uploads it to GitHub, downloads it, decompresses it, and launches the server.',
    'hero.download': 'Download',
    'hero.github': 'View on GitHub',
    'hero.meta': 'Windows · .NET 8 · Open Source · v0.2.0',

    // Problem section
    'problem.title': 'The Problem',
    'problem.description': 'When the friend hosting disconnects, everyone loses access to the world. The manual workflow of zipping, sending, unzipping, and reconfiguring the server is slow; MCSync automates it end-to-end.',
    'problem.withoutTitle': 'Without MCSync',
    'problem.withTitle': 'With MCSync',
    'problem.without.1': '— Stop server and search for the world folder',
    'problem.without.2': '— Compress everything into a ZIP',
    'problem.without.3': '— Send file manually',
    'problem.without.4': '— Download and decompress on another PC',
    'problem.without.5': '— Reconfigure server.jar and tunnel',
    'problem.with.1': '✓ Press STOP HOST AND SYNC',
    'problem.with.2': '✓ Press START HOST on the other PC',
    'problem.with.3': '✓ Keep playing in the same world',

    // How it works section
    'howWorks.title': 'How It Works',
    'howWorks.stopTitle': 'When stopping hosting:',
    'howWorks.startTitle': 'When wanting to host:',
    'howWorks.stop.1': 'You press STOP HOST AND SYNC',
    'howWorks.stop.2': 'The server stops cleanly',
    'howWorks.stop.3': 'The world is compressed and uploaded to your private GitHub repo',
    'howWorks.stop.4': 'Your turn is released',
    'howWorks.start.1': 'You press START HOST',
    'howWorks.start.2': 'MCSync downloads the latest world from GitHub',
    'howWorks.start.3': 'It decompresses and prepares the server',
    'howWorks.start.4': 'Starts server.jar and the playit.gg tunnel',
    'howWorks.start.5': 'You get the link to share with your friends',

    // App section
    'app.title': 'The App',
    'app.subtitle': 'Direct interface. No distractions.',
    'app.dashboard': 'Main dashboard showing server status and action buttons',
    'app.config': 'Configuration fields: GitHub Owner, Repo, Branch, Token, Server Jar path, and Playit.gg URL',
    'app.sync': 'Dashboard showing synchronization process in progress with status messages',

    // Requirements section
    'requirements.title': 'Requirements',
    'requirements.subtitle': 'Set this up once',
    'requirements.java': 'Java 21 or Higher',
    'requirements.javaDesc': 'Must be installed and added to system PATH. Download from adoptium.net or the official Oracle JDK.',
    'requirements.playit': 'playit.gg',
    'requirements.playitDesc': 'Download and install the .msi from playit.gg/download/windows. When you open it the first time, you\'ll need to create an account, confirm the agent, and configure it for Minecraft Java Edition. This process takes less than 2 minutes. When done, playit.gg will give you a link — save it. If you lose it, you can recover it by running playit in a terminal.',
    'requirements.repo': 'Private Repository on GitHub',
    'requirements.repoDesc': 'Create a new (preferably private) repository on GitHub. This repo will store the world and sync status. You don\'t need to upload anything manually.',
    'requirements.token': 'GitHub Token (Fine-grained)',
    'requirements.tokenDesc': 'Go to github.com/settings/personal-access-tokens. When creating the token: give it any name, in Repository Access select Only select repositories and choose the repo you created. In permissions, select Contents and change access to Read and Write. Generate the token and copy it immediately — you won\'t be able to see it again. If you lose it in the future, you can generate a new one without losing the world.',
    'requirements.jar': 'Minecraft server.jar',
    'requirements.jarDesc': 'Download from minecraft.net/en-us/download/server for the latest version. For specific versions use mcversions.net.',

    // Setup section
    'setup.title': 'Setup MCSync',
    'setup.subtitle': 'Only the first time. Other users share the same GitHub configuration.',
    'setup.field': 'Field',
    'setup.example': 'Example',
    'setup.owner': 'GitHub Owner',
    'setup.repo': 'GitHub Repo',
    'setup.branch': 'GitHub Branch',
    'setup.token': 'GitHub Token',
    'setup.jar': 'Server Jar',
    'setup.playitUrl': 'Playit.gg URL',
    'setup.playitNote': 'The link provided by Playit.gg',
    'setup.note': 'If you lose your GitHub token, you can generate a new one. The world won\'t be lost and you don\'t need to create a new repository.',

    // Be host section
    'beHost.title': 'Want to be host too?',
    'beHost.description': 'Friends who want to take on the host role only need to prepare their environment once. They don\'t need to create their own repository or manually download the world: MCSync does it automatically when pressing START HOST.',
    'beHost.step1Title': 'Install Java',
    'beHost.step1': 'Install Java 21+ and add it to your system PATH.',
    'beHost.step2Title': 'Setup playit.gg',
    'beHost.step2': 'Complete the 2-minute initial flow for Minecraft Java Edition.',
    'beHost.step3Title': 'Receive GitHub Data',
    'beHost.step3': 'Use owner, repo, branch, and token from the original host.',

    // Download section
    'download.title': 'Ready to Play',
    'download.subtitle': 'Download MCSync and share it with your friends.',
    'download.meta': 'Open source · MIT License · Windows · Built with C# .NET 8',

    // Footer
    'footer.text': 'MCSync · github.com/fnandoth/MCSync · Open Source',

    // Language toggle
    'lang.english': 'English',
    'lang.spanish': 'Español',
  }
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key as keyof typeof translations['es']] || key;
}
