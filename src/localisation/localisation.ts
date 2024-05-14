import { t } from '@/localisation/index';

class Translation {
	transLate = (label:string) => t(`tr:${label}`).toString();

	get joinFamilyWelcomeTitle() { return this.transLate('joinFamily.welcome.title'); }
	get joinFamilyWelcomeMessage() { return this.transLate('joinFamily.welcome.message'); }
	get continue() { return this.transLate('continue'); }
	get signup() { return this.transLate('signup'); }
	get signInWithGoogle() { return this.transLate('sign.in.with.google'); }
	get signInWithApple() { return this.transLate('sign.in.with.apple'); }
	get singUpWelcomeTitle() { return this.transLate('singUp.welcome.title'); }
	get singUpWelcomeMessage() { return this.transLate('singUp.welcome.message'); }
	get newToFamo() { return this.transLate('new.to.famo'); }
	get continueWithEmail() { return this.transLate('continue.with.email'); }
	get or() { return this.transLate('or'); }
	get joinFamilyErrorMessage() { return this.transLate('join.family.error.message'); }
	get email() { return this.transLate('email'); }
	get password() { return this.transLate('password'); }
	get invalidEmailMessage() { return this.transLate('invalid.email.message'); }
	get openYourGmailInbox() { return this.transLate('open.your.gmail.inbox'); }
	get forgotPin() { return this.transLate('forgot.pin'); }
	get forgotPinMessage() { return this.transLate('forgot.pin.message'); }
	get gmailRedirectForgetPasswordMessage() { return this.transLate('gmailRedirect.forget.password.message'); }
	get forgotPassword() { return this.transLate('forgot.password'); }
	get forgotPasswordMessage() { return this.transLate('forgot.password.message'); }
	get enterYourSecretPIN() { return this.transLate('enter.your.secret.PIN'); }
	get backToLogin() { return this.transLate('back.to.login'); }
	get loginErrorAccountNotFound() { return this.transLate('login.error.accountNotFound'); }
	get loginErrorInvalidPassword() { return this.transLate('login.error.invalidPassword'); }
	get formErrorRequired() { return this.transLate('form.error.required'); }
	get formErrorCommon() { return this.transLate('form.error.common'); }
	get wrongPinMessage2() { return this.transLate('wrong.pin.message.2'); }
	get wrongPinMessage1() { return this.transLate('wrong.pin.message.1'); }
	get unlockAccountMessage() { return this.transLate('unlock.account.message'); }
	get unlockAccount() { return this.transLate('unlock.account'); }
	get logout() { return this.transLate('logout'); }
	get emailFiledMessage1() { return this.transLate('email.filed.message.1'); }
	get emailFiledMessage2() { return this.transLate('email.filed.message.2'); }
	get yourFamily() { return this.transLate('your.family'); }
	get totalAssets() { return this.transLate('total.assets'); }
	get verifiedByFamilyOfficeTeam() { return this.transLate('verified.by.family.office.team'); }
	get familyOffice() { return this.transLate('family.office'); }
	get total() { return this.transLate('total'); }
	get entities() { return this.transLate('entities'); }
	get entity() { return this.transLate('entity'); }
	get goToHome() { return this.transLate('go.to.home'); }
	get remainingStepMessage() { return this.transLate('remaining.step.message'); }
	get assets() { return this.transLate('assets'); }
	get breakdownBasedOnMarketValue() { return this.transLate('breakdown.based.on.market.value'); }
	get ofYourAssetsAreIn() { return this.transLate('of.your.assets.are.in'); }
	get startDiscussionMessage() { return this.transLate('start.discussion.message'); }
	get cashBankBalances() { return this.transLate('cash.bank.balances'); }
	get updatedMinsAgo() { return this.transLate('updated.mins.ago'); }
	get approvals() { return this.transLate('approvals'); }
	get pending() { return this.transLate('pending'); }
	get requests() { return this.transLate('requests'); }
	get request() { return this.transLate('request'); }
	get requestsBy() { return this.transLate('requests.by'); }
	get createdAt() { return this.transLate('created.at'); }
	get inviteYourTeam() { return this.transLate('invite.your.team'); }
	get haveAlreadyJoined() { return this.transLate('have.already.joined'); }
	get invite() { return this.transLate('invite'); }
	get assetsBreakup() { return this.transLate('assets.breakup'); }
	get inviteUser() { return this.transLate('invite.user'); }
	get inviteMessage() { return this.transLate('invite.message'); }
	get send() { return this.transLate('send'); }
	get mutualFunds() { return this.transLate('mutual.funds'); }
	get remainingStepHeaderMessage() { return this.transLate('remaining.step.header.message'); }
	get fieldsRemaining() { return this.transLate('fields.remaining'); }
	get updated() { return this.transLate('updated'); }
	get updatedAt() { return this.transLate('updated.at'); }
	get updatedAgo() { return this.transLate('updated.ago'); }
	get totalAssetsByMarketValue() { return this.transLate('total.assets.by.market.value'); }
	get howMuchIsItRentedFor() { return this.transLate('how.much.is.it.rented.for'); }
	get done() { return this.transLate('done'); }
	get pendingApprovals() { return this.transLate('pending.approvals'); }
	get allEntities() { return this.transLate('allEntities'); }
	get checkUpdateHistory() { return this.transLate('check.update.history'); }
	get marketValue() { return this.transLate('market.value'); }
	get totalMarketValue() { return this.transLate('total.market.value'); }
	get chooseForWhichEntities() {return this.transLate('choose.for.which.entities.you.would.like.to.see.the.assets');}
	get invested() {return this.transLate('invested');}
	get updateHistory() {return this.transLate('update.history');}
	get assetType() {return this.transLate('asset.type');}
	get warning() {return this.transLate('warning');}
	get warningMessageText() {return this.transLate('warning.message.text');}
	get addMarketValue() {return this.transLate('add.market.value');}
	get edit() {return this.transLate('edit');}
	get equity() {return this.transLate('equity');}
	get moreDetails() {return this.transLate('more.details');}
	get lessDetails() {return this.transLate('less.details');}
	get purchasedOn() {return this.transLate('purchased.on');}
	get updatedOnAug() {return this.transLate('updated.on.aug');}
	get discussions() {return this.transLate('discussions');}
	get transactions() {return this.transLate('transactions');}
	get viewAll() {return this.transLate('view.all');}
	get recentTransactions() {return this.transLate('recent.transactions');}
	get from() {return this.transLate('from');}
	get to() {return this.transLate('to');}
	get subtype() {return this.transLate('subtype');}
	get editAsset() {return this.transLate('edit.asset');}
	get advisor() {return this.transLate('advisor');}
	get units() {return this.transLate('units');}
	get saveChanges() {return this.transLate('save.changes');}
	get investedValue() { return this.transLate('invested.value'); }
	get shares() { return this.transLate('shares'); }
	get avgCost() { return this.transLate('avg.cost'); }
	get noResultFound() { return this.transLate('no.result.found'); }
	get tryChangingTheFilters() { return this.transLate('try.changing.the.filters'); }
	get date() { return this.transLate('date'); }
	get refresh() {return this.transLate('refresh');}
	get dataNotFoundMessage() {return this.transLate('data.not.found.message');}
	get dataNotFoundMessage2() {return this.transLate('data.not.found.message.2');}
	get noRequest() {return this.transLate('no.request');}
	get invitationSent() {return this.transLate('invitation.sent');}
	get clearAll() {return this.transLate('clear.all');}
	get trySearchingFor() {return this.transLate('try.searching.for.a.different');}
	get resultsFoundFor() {return this.transLate('results.found.for');}
	get youreTheFirstOne() {return this.transLate('youre.the.first.one');}

	get allTransactions() {return this.transLate('all.transactions');}
}
export const translation = new Translation();
