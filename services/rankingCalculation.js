class Ranker {

  constructor() {}

  /**
   * 
   * @param {number} tierKronos -> 1-16 -> The max tier member achieved for Kronos
   * @param {string} timeKronos -> "0:20"- "MAX" -> The time it took to kill Kronos
   * @param {number} tierApep -> 1-16 -> The max tier member achieved for Apep
   * @param {string} timeApep -> "0:20"- "MAX" -> The time it took to kill Apep
   * @param {number} tierFafnir -> 1-16 -> The max tier member achieved for Fafnir
   * @param {string} timeFafnir -> "0:20"- "MAX" -> The time it took to kill Fafnir
   * @param {number} bestPw -> 1-16 -> The best point war tier achieved
   * @param {string} gradeShadowgale -> "E"-"EX+" -> The best grade achieved for Shadowgale
   * @param {string} gradeShadowstream -> "E"-"EX+" -> The best grade achieved for Shadowstream
   * @param {string} gradeShadowfire -> "E"-"EX+" -> The best grade achieved for Shadowfire
   * @param {string} gradeDarkstarlord -> "E"-"EX+" -> The best grade achieved for Darkstarlord
   * @returns {number} -> The total points
   */
  static calculation(tierKronos, timeKronos, tierApep, timeApep, tierFafnir, timeFafnir, bestPw, gradeShadowgale, gradeShadowstream, gradeShadowfire, gradeDarkstarlord, config) {

	// console.log("Tier Kronos: " + tierKronos, "Time Kronos: " + timeKronos, "Tier Apep: " + tierApep, "Time Apep: " + timeApep, "Tier Fafnir: " + tierFafnir, "Time Fafnir: " + timeFafnir, "Best PW: " + bestPw, "Grade Shadowgale: " + gradeShadowgale, "Grade Shadowstream: " + gradeShadowstream, "Grade Shadowfire: " + gradeShadowfire, "Grade Darkstarlord: " + gradeDarkstarlord)

	let memberTimes = {
		kronosTime: timeKronos,
		apepTime: timeApep,
		fafnirTime: timeFafnir
	}

	memberTimes = this.sanitizeMember(memberTimes)

	// console.log("Sanitized Times: " + memberTimes.kronosTime, memberTimes.apepTime, memberTimes.fafnirTime)

    const miraclePoints = this.getMiraclePoints(tierKronos, memberTimes.kronosTime, tierApep, memberTimes.apepTime, tierFafnir, memberTimes.fafnirTime, config)
    const bestPwPoints = this.getPointWarPoints(bestPw, config)
    const desolatedLandsPoints = this.getDesolatedLandsPoints(gradeShadowgale, gradeShadowstream, gradeShadowfire, config)
    const sentinelPoints = this.getSentinelPoints(gradeDarkstarlord, config)

    const totalPoints = miraclePoints + bestPwPoints + desolatedLandsPoints + sentinelPoints

    return totalPoints
  }
  /**
   * 
   * @param {number} tierKronos -> 1-16 -> The max tier member achieved for Kronos
   * @param {string} timeKronos -> "0:20"- "MAX" -> The time it took to kill Kronos
   * @param {number} tierApep -> 1-16 -> The max tier member achieved for Apep
   * @param {string} timeApep -> "0:20"- "MAX" -> The time it took to kill Apep
   * @param {number} tierFafnir -> 1-16 -> The max tier member achieved for Fafnir
   * @param {string} timeFafnir -> "0:20"- "MAX" -> The time it took to kill Fafnir
   * @returns {number} -> The total miracle points
   */
  static getMiraclePoints(tierKronos, timeKronos, tierApep, timeApep, tierFafnir, timeFafnir, config) {
	let tiers = config.kronosConfig.tiers
	let times = config.kronosConfig.speed

    let kronosMulti = tiers.find(tier => tier.tier === tierKronos).scoreMulti
    kronosMulti += times.find(speed => speed.time === timeKronos).scoreMulti
    const kronosPoints = kronosMulti * config.globalConfig.ritualBaseScore

	tiers = config.apepConfig.tiers
	times = config.apepConfig.speed
    
	let apepMulti = tiers.find(tier => tier.tier === tierApep).scoreMulti
    apepMulti += times.find(speed => speed.time === timeApep).scoreMulti
    const apepPoints = apepMulti * config.globalConfig.ritualBaseScore

	tiers = config.fafnirConfig.tiers
	times = config.fafnirConfig.speed

    let fafnirMulti = tiers.find(tier => tier.tier === tierFafnir).scoreMulti
    fafnirMulti += times.find(speed => speed.time === timeFafnir).scoreMulti
    const fafnirPoints = fafnirMulti * config.globalConfig.ritualBaseScore

    return Math.floor((kronosPoints + apepPoints + fafnirPoints) / 3)

  }
  /**
   * 
   * @param {number} bestPw -> 1-16 -> The best point war tier achieved
   * @returns {number} -> The total point war points
   */
  static getPointWarPoints(bestPw, config) {
    const pointWarMulti = config.pointWarConfig.tiers.find(tier => tier.PWT === bestPw).scoreMulti
    const pointWarPoints = pointWarMulti * config.globalConfig.pointWarBaseScore

    return pointWarPoints
  }

  /**
   * 
   * @param {string} gradeShadowgale -> "E"-"EX+" -> The best grade achieved for Shadowgale
   * @param {string} gradeShadowstream -> "E"-"EX+" -> The best grade achieved for Shadowstream
   * @param {string} gradeShadowfire -> "E"-"EX+" -> The best grade achieved for Shadowfire
   * @returns {number} -> The total desolated lands points
   */
  static getDesolatedLandsPoints(gradeShadowgale, gradeShadowstream, gradeShadowfire, config) {
    const shadowgaleMulti = config.shadowGaleConfig.grades.find(grade => grade.grade === gradeShadowgale).scoreMulti
    const shadowgalePoints = shadowgaleMulti * config.globalConfig.desolatedLandsBaseScore

    const shadowstreamMulti = config.shadowStreamConfig.grades.find(grade => grade.grade === gradeShadowstream).scoreMulti
    const shadowstreamPoints = shadowstreamMulti * config.globalConfig.desolatedLandsBaseScore

    const shadowfireMulti = config.shadowFireConfig.grades.find(grade => grade.grade === gradeShadowfire).scoreMulti
    const shadowfirePoints = shadowfireMulti * config.globalConfig.desolatedLandsBaseScore

    return Math.floor((shadowgalePoints + shadowstreamPoints + shadowfirePoints) / 3)

  }

  /**
   * 
   * @param {string} gradeDarkstarlord -> "E"-"EX+" -> The best grade achieved for Darkstarlord
   * @returns {number} -> The total sentinel points
   */
  static getSentinelPoints(gradeDarkstarlord, config) {
    const darkstarlordMulti = config.darkStarLordConfig.grades.find(grade => grade.grade === gradeDarkstarlord).scoreMulti
    const darkstarlordPoints = darkstarlordMulti * config.globalConfig.sentinelBaseScore

    return darkstarlordPoints

  }

  /**
   * 
   * @param {object} member -> The member object
   * @returns {object} -> The sanitized member object
   */
  static sanitizeMember(member) {
	const sanitizedMember = {}
	for (const [key, value] of Object.entries(member)) {
		if (key === 'kronosTime' || key === 'apepTime' || key === 'fafnirTime') {
			const time = value.split(':')
			const seconds = time[1][1]
			const secondsDecimal = time[1][0] 
			if (seconds != '0') {
				parseInt(seconds) >= 5 && parseInt(secondsDecimal) < 5 ? sanitizedMember[key] = `${time[0]}:${(parseInt(secondsDecimal)+1).toString}0` : sanitizedMember[key] = `${time[0]}:${secondsDecimal}0`
				parseInt(seconds) >= 5 && parseInt(secondsDecimal) === 5 ? sanitizedMember[key] = `${(parseInt(time[0])+1).toString()}:00` : sanitizedMember[key] = `${time[1]}:${secondsDecimal}0`
			} 
			if (key === 'kronosTime' || key === 'apepTime') {
				time[0] === '0' && time[1][0] === '1' ? sanitizedMember[key] = '0:20' : sanitizedMember[key] = value
				parseInt(time[0]) >= 3 ? sanitizedMember[key] = 'MAX' : sanitizedMember[key] = value
			}
			if (key === 'fafnirTime') {
				time[0] === '0' && parseInt(time[1][0]) < 3 ? sanitizedMember[key] = '0:30' : sanitizedMember[key] = value
				parseInt(time[0]) >= 4 ? sanitizedMember[key] = 'MAX' : sanitizedMember[key] = value
			}
		}
	}
	return sanitizedMember
  }
}

export default Ranker;