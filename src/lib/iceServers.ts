const iceServers: RTCIceServer[] = [
  {
    urls: [
      'stun:openrelay.metered.ca:80',
      'stun.voipzoom.com:3478',
      'stun.poetamatusel.org:3478',
      'stun.obovsem.com:3478',
      'stun.kaznpu.kz:3478',
      'stun.jumblo.com:3478',
      'stun.highfidelity.io:3478',
      'stun.sipglobalphone.com:3478',
      'stun.kedr.io:3478',
      'stun.clickphone.ro:3478',
      'stun.synergiejobs.be:3478',
      'stun.spoiltheprincess.com:3478',
      'stun.var6.cn:3478',
      'stun.voicetech.se:3478',
      'stun.meetwife.com:3478',
      'stun.fitauto.ru:3478',
      'stun.myhowto.org:3478',
      'stun.vo.lu:3478',
      'stun.olimontel.it:3478',
      'stun.voicetrading.com:3478',
      'stun.leonde.org:3478',
      'stun.sip.us:3478',
      'stun.voipinfocenter.com:3478',
      'stun.syncthing.net:3478',
      'stun.next-gen.ro:3478',
      'stun.zentauron.de:3478',
      'stun.openvoip.it:3478',
      'stun.fairytel.at:3478',
      'stun.stochastix.de:3478',
      'stun.foad.me.uk:3478',
      'stun.bitburger.de:3478',
      'stun3.l.google.com:19302',
      'stun.webcalldirect.com:3478',
      'stun.sipgate.net:3478',
      'stun.bearstech.com:3478',
      'stun.beebeetle.com:3478',
      'stun.demos.ru:3478',
      'stun.siptrunk.com:3478',
      'stun.url.net.au:3478',
      'stun.edwin-wiegele.at:3478',
      'stun.ooma.com:3478',
      'stun.voipstunt.com:3478',
      'stun.bernardoprovenzano.net:3478',
      'stun.ortopediacoam.it:3478',
      'stun.teliax.com:3478',
      'stun.graftlab.com:3478',
      'stun.ipshka.com:3478',
      'stun.nexphone.ch:3478',
      'stun.jay.net:3478',
      'stun.linphone.org:3478',
      'stun.aaisp.co.uk:3478',
      'stun.zottel.net:3478',
      'stun.neomedia.it:3478',
      'stun.vomessen.de:3478',
      'stun.netappel.com:3478',
      'stun.sipgate.net:10000',
      'stun.dus.net:3478',
      'stun.labs.net:3478',
      'stun.oncloud7.ch:3478',
      'stun.splicecom.com:3478',
      'stun.planetarium.com.br:3478',
      'stun.internetcalls.com:3478',
      'stun.netgsm.com.tr:3478',
      'stun.savemgo.com:3478',
      'stun.connecteddata.com:3478',
      'stun.piratecinema.org:3478',
      'stun.hoiio.com:3478',
      'stun.myvoipapp.com:3478',
      'stun.vadacom.co.nz:3478',
      'stun.rockenstein.de:3478',
      'stun.voipcheap.co.uk:3478',
      'stun.nonoh.net:3478',
      'stun.carlovizzini.it:3478',
      'stun.nautile.nc:3478',
      'stun.easycall.pl:3478',
      'stun.totalcom.info:3478',
      'stun.otos.pl:3478',
      'stun.stadtwerke-eutin.de:3478',
      'stun.comrex.com:3478',
      'stun.sky.od.ua:3478',
      'stun.webmatrix.com.br:3478',
      'stun.yollacalls.com:3478',
      'stun.aa.net.uk:3478',
      'stun.h4v.eu:3478',
      'stun.sipnet.net:3478',
      'stun.freecall.com:3478',
      'stun.cdosea.org:3478',
      'stun.irishvoip.com:3478',
      'stun.elitetele.com:3478',
      'stun.junet.se:3478',
      'stun.megatel.si:3478',
      'stun.gravitel.ru:3478',
      'stun.peeters.com:3478',
      'stun.textz.com:3478',
      'stun.localphone.com:3478',
      'stun.lineaencasa.com:3478',
      'stun.kanojo.de:3478',
      'stun.kore.com:3478',
      'stun.bethesda.net:3478',
      'stun.symonics.com:3478',
      'stun.it1.hr:3478',
      'stun.m-online.net:3478',
      'stun.galeriemagnet.at:3478',
      'stun.odr.de:3478',
      'stun.liveo.fr:3478',
      'stun.marble.io:3478',
      'stun.gntel.nl:3478',
      'stun.signalwire.com:3478',
      'stun.engineeredarts.co.uk:3478',
      'stun.easter-eggs.com:3478',
      'stun.palava.tv:3478',
      'stun.rackco.com:3478',
      'stun.voippro.com:3478',
      'stun.bcs2005.net:3478',
      'stun.siptraffic.com:3478',
      'stun.nextcloud.com:443',
      'stun.frozenmountain.com:3478',
      'stun.voipvoice.it:3478',
      'stun.training-online.eu:3478',
      'stun.landvast.nl:3478',
      'stun.poivy.com:3478',
      'stun.bandyer.com:3478',
      'stun.3deluxe.de:3478',
      'stun.mit.de:3478',
      'stun.tula.nu:3478',
      'stun.atagverwarming.nl:3478',
      'stun.myspeciality.com:3478',
      'stun.ppdi.com:3478',
      'stun.ttmath.org:3478',
      'stun.root-1.de:3478',
      'stun.dunyatelekom.com:3478',
      'stun.sipnet.com:3478',
      'stun.sipdiscount.com:3478',
      'stun.files.fm:3478',
      'stun.voztovoice.org:3478',
      'stun.waterpolopalermo.it:3478',
      'stun.acronis.com:3478',
      'stun.genymotion.com:3478',
      'stun.voipwise.com:3478',
      'stun.chaosmos.de:3478',
      'stun.goldener-internetpreis.de:3478',
      'stun.ctafauni.it:3478',
      'stun.muoversi.net:3478',
      'stun.wcoil.com:3478',
      'stun.peethultra.be:3478',
      'stun.fondazioneroccochinnici.it:3478',
      'stun.levigo.de:3478',
      'stun.dcalling.de:3478',
      'stun.nexxtmobile.de:3478',
      'stun.ipfire.org:3478',
      'stun.eurosys.be:3478',
      'stun.kaseya.com:3478',
      'stun.schulinformatik.at:3478',
      'stun.isp.net.au:3478',
      'stun1.l.google.com:19305',
      'stun.gmx.net:3478',
      'stun.gigaset.net:3478',
      'stun.nanocosmos.de:3478',
      'stun.ippi.com:3478',
      'stun.voipia.net:3478',
      'stun.skydrone.aero:3478',
      'stun.schlund.de:3478',
      'stun.godatenow.com:3478',
      'stun.marcelproust.it:3478',
      'stun.threema.ch:3478',
      'stun.callromania.ro:3478',
      'stun.allflac.com:3478',
      'stun.ixc.ua:3478',
      'stun.chatous.com:3478',
      'stun.ivao.aero:3478',
      'stun.shadrinsk.net:3478',
      'stun.vavadating.com:3478',
      'stun.sipnet.ru:3478',
      'stun.zadarma.com:3478',
      'stun3.l.google.com:19305',
      'stun.lowratevoip.com:3478',
      'stun.vozelia.com:3478',
      'stun.altar.com.pl:3478',
      'stun.lovense.com:3478',
      'stun.voipgain.com:3478',
      'stun.newrocktech.com:3478',
      'relay.webwormhole.io:3478',
      'stun.kitamaebune.com:3478',
      'stun.meowsbox.com:3478',
      'stun.bergophor.de:3478',
      'stun.etoilediese.fr:3478',
      'stun.cibercloud.com.br:3478',
      'stun.alphacron.de:3478',
      'stun.1-voip.com:3478',
      'stun.hicare.net:3478',
      'stun.solnet.ch:3478',
      'stun.f.haeder.net:3478',
      'stun1.l.google.com:19302',
      'stun.voipgate.com:3478',
      'stun.soho66.co.uk:3478',
      'stun.voipdiscount.com:3478',
      'stun.effexx.com:3478',
      'stun.sonetel.net:3478',
      'stun.imafex.sk:3478',
      'stun.voipbuster.com:3478',
      'stun.onthenet.com.au:3478',
      'stun.acquageraci.it:3478',
      'stun.smslisto.com:3478',
      'stun.sippeer.dk:3478',
      'stun.smsdiscount.com:3478',
      'stun.grazertrinkwasseringefahr.at:3478',
      'stun.goldfish.ie:3478',
      'stun.1und1.de:3478',
      'stun.lleida.net:3478',
      'stun.romancecompass.com:3478',
      'stun.fathomvoice.com:3478',
      'stun.solcon.nl:3478',
      'stun.uabrides.com:3478',
      'stun.1cbit.ru:3478',
      'stun.mixvoip.com:3478',
      'stun.yesdates.com:3478',
      'stun.tichiamo.it:3478',
      'stun.3wayint.com:3478',
      'stun.selasky.org:3478',
      'stun.rynga.com:3478',
      'stun.tng.de:3478',
      'stun.openjobs.hu:3478',
      'stun.uls.co.za:3478',
      'stun.powervoip.com:3478',
      'stun.voipbusterpro.com:3478',
      'stun.business-isp.nl:3478',
      'stun.talkho.com:3478',
      'stun.12voip.com:3478',
      'stun.bluesip.net:3478',
      'stun.cope.es:3478',
      'stun.uiltucssicilia.it:3478',
      'stun.solomo.de:3478',
      'stun.voipplanet.nl:3478',
      'stun.voipconnect.com:3478',
      'stun.voip.aebc.com:3478',
      'stun.alpirsbacher.de:3478',
      'stun.qcol.net:3478',
      'stun.arkh-edu.ru:3478',
      'stun.romaaeterna.nl:3478',
      'stun.voys.nl:3478',
      'stun.moonlight-stream.org:3478',
      'stun.easyvoip.com:3478',
      'stun.l.google.com:19305',
      'stun.infra.net:3478',
      'stun.jowisoftware.de:3478',
      'stun.actionvoip.com:3478',
      'stun.halonet.pl:3478',
      'stun.intervoip.com:3478',
      'stun.coffee-sen.com:3478',
      'stun.voipcheap.com:3478',
      'stun.issabel.org:3478',
      'stun.expandable.io:3478',
      'stun.taxsee.com:3478',
      'stun.heeds.eu:3478',
      'stun.senstar.com:3478',
      'stun.ru-brides.com:3478',
      'stun.freeswitch.org:3478',
      'stun.mywatson.it:3478',
      'stun.ladridiricette.it:3478',
      'stun.avigora.fr:3478',
      'stun.dls.net:3478',
      'stun.komsa.de:3478',
      'stun.geesthacht.de:3478',
      'stun.thebrassgroup.it:3478',
      'stun.fmo.de:3478',
      'stun.tel2.co.uk:3478',
      'stun.lebendigefluesse.at:3478',
      'stun.smartvoip.com:3478',
      'stun.linuxtrent.it:3478',
      'stun.axeos.nl:3478',
      'stun.annatel.net:3478',
      'stun.simlar.org:3478',
      'stun.jabbim.cz:3478',
      'stun.radiojar.com:3478',
      'stun.cellmail.com:3478',
      'stun.tel.lu:3478',
      'stun.leucotron.com.br:3478',
      'stun.telnyx.com:3478',
      'stun.kreis-bergstrasse.de:3478',
      'stun.rolmail.net:3478',
      'stun.sipy.cz:3478',
      'stun.hide.me:3478',
      'stun.vivox.com:3478',
      'stun.eaclipt.org:3478',
      'stun.optdyn.com:3478',
      'stun.sparvoip.de:3478',
      'stun.voip.eutelia.it:3478',
      'stun.healthtap.com:3478',
      'stun.t-online.de:3478',
      'stun.voztele.com:3478',
      'stun.wifirst.net:3478',
      'stun.wemag.com:3478',
      'stun.swrag.de:3478',
      'stun.gmx.de:3478',
      'stun.acrobits.cz:3478',
      'stun.telbo.com:3478',
      'stun.surjaring.it:3478',
      'stun.deepfinesse.com:3478',
      'stun.sipthor.net:3478',
      'stun.telonline.com:3478',
      'stun.siplogin.de:3478',
      'stun.ippi.fr:3478',
      'stun.schoeffel.de:3478',
      'stun.nstelcom.com:3478',
      'stun.trivenet.it:3478',
      'stun.voipblast.com:3478',
      'stun.nfon.net:3478',
      'stun.axialys.net:3478',
      'stun.eoni.com:3478',
      'stun.wia.cz:3478',
      'stun.verbo.be:3478',
      'stun.freevoipdeal.com:3478',
      'stun.hot-chilli.net:3478',
      'stun.sonetel.com:3478',
      'stun2.l.google.com:19302',
      'stun4.l.google.com:19305',
      'stun.stunprotocol.org:3478',
      'stun.steinbeis-smi.de:3478',
      'stun.kotter.net:3478',
      'stun.hosteurope.de:3478',
      'stun.cablenet-as.net:3478',
      'stun.voipgrid.nl:3478',
      'stun.mobile-italia.com:3478',
      'stun.technosens.fr:3478',
      'stun.shy.cz:3478',
      'stun.l.google.com:19302',
      'stun.miwifi.com:3478',
      'stun.epygi.com:3478',
      'stun.lundimatin.fr:3478',
      'stun.officinabit.com:3478',
      'stun.redworks.nl:3478',
      'stun.globalmeet.com:3478',
      'stun.londonweb.net:3478',
      'stun.myvoiptraffic.com:3478',
      'stun.syrex.co.za:3478',
      'stun.studio-link.de:3478',
      'stun.zepter.ru:3478',
      'stun.studio71.it:3478',
      'stun.siedle.com:3478',
      'stun.ukh.de:3478',
      'stun.istitutogramscisiciliano.it:3478',
      'stun.thinkrosystem.com:3478',
      'stun.nottingham.ac.uk:3478',
      'stun.srce.hr:3478',
      'stun.fbsbx.com:3478',
      'stun.bridesbay.com:3478',
      'stun.imp.ch:3478',
      'stun.eleusi.com:3478',
      'stun.provectio.fr:3478',
      'stun.futurasp.es:3478',
      'stun.voip.blackberry.com:3478',
      'stun.babelforce.com:3478',
      'stun.ringostat.com:3478',
      'stun.anlx.net:3478',
      'stun4.l.google.com:19302',
      'stun.geonet.ro:3478',
      'stun.streamnow.ch:3478',
      'stun.medvc.eu:3478',
      'stun.sylaps.com:3478',
      'stun.westtel.ky:3478',
      'stun.framasoft.org:3478',
      'stun.sewan.fr:3478',
      'stun.nextcloud.com:3478',
      'stun.eol.co.nz:3478',
      'stun.funwithelectronics.com:3478',
      'stun.teamfon.de:3478',
      'stun.wtfismyip.com:3478',
      'stun.piratenbrandenburg.de:3478',
      'stun.trainingspace.online:3478',
      'stun.sovtest.ru:3478',
      'stun.baltmannsweiler.de:3478',
      'stun.antisip.com:3478',
      'stun.wxnz.net:3478',
      'stun.logic.ky:3478',
      'stun.crimeastar.net:3478',
      'stun.callwithus.com:3478',
      'stun.cloopen.com:3478',
      'stun.voipraider.com:3478',
      'stun.cheapvoip.com:3478',
      'stun.twt.it:3478',
      'stun.demos.su:3478',
      'stun.justvoip.com:3478',
      'stun.voipxs.nl:3478',
      'stun2.l.google.com:19305',
      'stun.autosystem.com:3478',
      'stun.yeymo.com:3478',
      'stun.plexicomm.net:3478',
      'iphone-stun.strato-iphone.de:3478',
      'stun.bau-ha.us:3478',
      'stun.ringvoz.com:3478',
    ],
  },
  {
    urls: 'turn:openrelay.metered.ca:80',
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
  {
    urls: 'turn:openrelay.metered.ca:443',
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
  {
    urls: 'turn:openrelay.metered.ca:443?transport=tcp',
    username: 'openrelayproject',
    credential: 'openrelayproject',
  },
];

export default iceServers;
